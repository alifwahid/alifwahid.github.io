// This code is heavily based on the tutorial from cloudcannon at the following link.
// https://learn.cloudcannon.com/jekyll/jekyll-search-using-lunr-js/
//
// Also found M. Long's blog below very useful (which is based on cloudcannon, too).
// http://www.mtlong.me/blog/jekyll-search-function/

(function () {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');
        if (results.length) {
            var appendString = '';
            for (var i = 0; i < results.length; i++) {
                var item = store[results[i].ref];
                appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3>';
                appendString += '<p>' + item.excerpt.substring(0, 150) + '...</p></a></li>';
            }
            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<li>No results found</li>';
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }

    var searchTerm = getQueryVariable('query');
    if (searchTerm) {
        document.getElementById('search-box').setAttribute("value", searchTerm);
        var idx = lunr(function () {
            this.field('id');
            this.field('title', {boost: 10});
            this.field('tags');
            this.field('content');
            this.field('excerpt');
            for (var key in window.store) {
                this.add({
                    'id': key,
                    'title': window.store[key].title,
                    'tags': window.store[key].tags,
                    'content': window.store[key].content,
                    'excerpt': window.store[key].excerpt
                });
            }
        });
        var results = idx.search(searchTerm);
        displaySearchResults(results, window.store);
    }
})();
