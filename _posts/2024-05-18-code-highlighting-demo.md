---
layout: post
title:  "Mastering Syntax Highlighting"
date:   2024-05-18 10:30:00 +0000
categories: tech
tags: [code, design, css]
excerpt: "A deep dive into how code snippets are rendered beautifully."
---

One of the most important features of a technical blog is clear, readable code snippets. We use **Rouge** with a custom Monokai-inspired theme.

### JavaScript Example

Here is a function that debounces user input:

```javascript
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
```

### Python Example

A simple Python script using `requests`:

```python
import requests

def fetch_data(api_url):
    response = requests.get(api_url)
    if response.status_code == 200:
        return response.json()
    return None

data = fetch_data('https://api.github.com')
print(data)
```

Look at those colors! It makes reading code a joy.

| Feature | Support |
| :--- | :--- |
| Line Numbers | Optional |
| Syntax Coloring | Yes |
| Copy Button | Coming Soon |
