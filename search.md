---
layout: page
title: Search Results
permalink: /search/
---

<ul id="search-results"></ul>

<script>
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "tags": {{ post.tags  | strip_html | jsonify }},
        "categories": {{ post.categories | strip_html | jsonify }},
        "content": {{ post.content | strip_html | jsonify }},
        "excerpt": {{ post.excerpt | strip_html | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>

<script src="https://unpkg.com/lunr/lunr.js"></script>
<script src="../myjs/search.js"></script>
