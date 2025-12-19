document.addEventListener('DOMContentLoaded', () => {
    // Simple Search Implementation
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results-container');

    if (searchInput && resultsContainer) {
        let posts = [];

        // Fetch posts
        const baseUrl = window.siteBaseUrl || '';
        fetch(`${baseUrl}/search.json`)
            .then(response => response.json())
            .then(data => {
                posts = data;
            })
            .catch(err => console.error('Error loading search data:', err));

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();

            if (query.length < 2) {
                resultsContainer.innerHTML = '';
                resultsContainer.classList.remove('has-results');
                return;
            }

            const filteredPosts = posts.filter(post => {
                return post.title.toLowerCase().includes(query) ||
                    post.tags.toLowerCase().includes(query) ||
                    post.excerpt.toLowerCase().includes(query);
            });

            displayResults(filteredPosts);
        });

        function displayResults(results) {
            if (results.length === 0) {
                resultsContainer.innerHTML = '<p class="no-results">No results found.</p>';
            } else {
                const html = results.map(post => `
          <div class="search-result-item" style="padding: 1rem; border-bottom: 1px solid #334155;">
            <a href="${post.url}" style="font-weight: bold; font-size: 1.1rem; display: block;">${post.title}</a>
            <small style="color: #94a3b8;">${post.date}</small>
            <p style="margin: 0.5rem 0 0; font-size: 0.9rem; color: #cbd5e1;">${post.excerpt}</p>
          </div>
        `).join('');
                resultsContainer.innerHTML = html;
            }
            resultsContainer.classList.add('has-results');
        }
    }
});
