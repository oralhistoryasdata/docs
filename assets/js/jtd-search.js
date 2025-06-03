// Just the Docs style search functionality
// Based on https://github.com/just-the-docs/just-the-docs but adapted for Lunr.js

(function() {
  'use strict';
  
  var searchLoaded = false;
  var searchIndex = null;
  var searchData = null;
  var searchInput = null;
  var searchResults = null;
  var searchContainer = null;
  var currentSearchIndex = 0;
  var currentInput = '';
  
  // Initialize search when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initSearch();
  });
  
  function initSearch() {
    searchInput = document.getElementById('jtd-search-input');
    searchResults = document.getElementById('jtd-search-results');
    searchContainer = document.getElementById('jtd-search');
    
    if (!searchInput || !searchResults || !searchContainer) {
      return;
    }
    
    // Load search data and index
    loadSearchData();
    
    // Set up event listeners
    setupEventListeners();
    
    // Handle query string search
    handleQueryStringSearch();
  }
  
  function loadSearchData() {
    // Check if store is already loaded (from lunr-store.js)
    if (typeof store !== 'undefined') {
      searchData = store;
      createSearchIndex();
    } else {
      // Fallback: load search data
      var script = document.createElement('script');
      script.src = '/assets/js/lunr-store.js';
      script.onload = function() {
        searchData = store;
        createSearchIndex();
      };
      document.head.appendChild(script);
    }
  }
  
  function createSearchIndex() {
    // Check if lunr is loaded
    if (typeof lunr === 'undefined') {
      var script = document.createElement('script');
      script.src = '/assets/lib/lunr.min.js';
      script.onload = function() {
        buildIndex();
      };
      document.head.appendChild(script);
    } else {
      buildIndex();
    }
  }
  
  function buildIndex() {
    searchIndex = lunr(function () {
      this.ref('id');
      this.field('title', { boost: 10 });
      this.field('text');
      
      for (var item in searchData) {
        this.add({
          title: searchData[item].title,
          text: searchData[item].text,
          id: item
        });
      }
    });
    
    searchLoaded = true;
  }
  
  function setupEventListeners() {
    // Input events
    searchInput.addEventListener('input', handleInput);
    searchInput.addEventListener('focus', handleFocus);
    searchInput.addEventListener('blur', handleBlur);
    searchInput.addEventListener('keydown', handleKeydown);
    
    // Click outside to close
    document.addEventListener('click', function(e) {
      if (!searchContainer.contains(e.target)) {
        hideSearch();
      }
    });
  }
  
  function handleInput(e) {
    var input = e.target.value;
    if (input !== currentInput) {
      currentInput = input;
      currentSearchIndex++;
      performSearch(input, currentSearchIndex);
    }
  }
  
  function handleFocus() {
    if (currentInput) {
      showSearch();
    }
  }
  
  function handleBlur() {
    // Small delay to allow clicking on results
    setTimeout(function() {
      if (!searchContainer.querySelector(':hover')) {
        hideSearch();
      }
    }, 150);
  }
  
  function handleKeydown(e) {
    switch (e.keyCode) {
      case 27: // Escape
        hideSearch();
        searchInput.blur();
        break;
      case 38: // Arrow up
        e.preventDefault();
        navigateResults(-1);
        break;
      case 40: // Arrow down
        e.preventDefault();
        navigateResults(1);
        break;
      case 13: // Enter
        e.preventDefault();
        selectActiveResult();
        break;
    }
  }
  
  function performSearch(query, searchIndexId) {
    if (!searchLoaded || !query.trim()) {
      hideSearch();
      return;
    }
    
    // Perform the search
    var results = searchIndex.search(query);
    
    // Check if this is still the current search
    if (searchIndexId !== currentSearchIndex) {
      return;
    }
    
    displayResults(results, query);
    showSearch();
  }
  
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="jtd-search-no-result">No results found for "' + escapeHtml(query) + '"</div>';
      return;
    }
    
    var resultsList = document.createElement('ul');
    resultsList.className = 'jtd-search-results-list';
    
    // Limit results to prevent overwhelming
    var maxResults = Math.min(results.length, 10);
    
    for (var i = 0; i < maxResults; i++) {
      var result = results[i];
      var doc = searchData[result.ref];
      
      if (doc) {
        var listItem = createResultItem(doc, query);
        resultsList.appendChild(listItem);
      }
    }
    
    searchResults.innerHTML = '';
    searchResults.appendChild(resultsList);
  }
  
  function createResultItem(doc, query) {
    var listItem = document.createElement('li');
    listItem.className = 'jtd-search-results-list-item';
    
    var link = document.createElement('a');
    link.href = doc.url;
    link.className = 'jtd-search-result';
    
    var title = document.createElement('div');
    title.className = 'jtd-search-result-title';
    
    var docDiv = document.createElement('div');
    docDiv.className = 'jtd-search-result-doc';
    docDiv.innerHTML = '<svg viewBox="0 0 24 24" class="jtd-search-result-icon" aria-hidden="true"><path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/></svg>';
    
    var docTitle = document.createElement('div');
    docTitle.className = 'jtd-search-result-doc-title';
    docTitle.textContent = doc.title;
    docDiv.appendChild(docTitle);
    
    title.appendChild(docDiv);
    
    // Add preview text
    var preview = document.createElement('div');
    preview.className = 'jtd-search-result-preview';
    preview.innerHTML = createPreview(doc.text, query);
    
    link.appendChild(title);
    link.appendChild(preview);
    listItem.appendChild(link);
    
    return listItem;
  }
  
  function createPreview(text, query) {
    var words = text.toLowerCase().split(' ');
    var queryWords = query.toLowerCase().split(' ').filter(word => word.length > 1);
    var previewLength = 25;
    
    // Find first occurrence of query terms
    var matchIndex = -1;
    for (var i = 0; i < words.length; i++) {
      for (var j = 0; j < queryWords.length; j++) {
        if (words[i].includes(queryWords[j])) {
          matchIndex = i;
          break;
        }
      }
      if (matchIndex !== -1) break;
    }
    
    var startIndex = Math.max(0, matchIndex - 10);
    var endIndex = Math.min(words.length, startIndex + previewLength);
    
    var previewWords = text.split(' ').slice(startIndex, endIndex);
    var preview = previewWords.join(' ');
    
    // Highlight query terms
    for (var k = 0; k < queryWords.length; k++) {
      var regex = new RegExp('(' + escapeRegex(queryWords[k]) + ')', 'gi');
      preview = preview.replace(regex, '<span class="jtd-search-result-highlight">$1</span>');
    }
    
    var ellipsesBefore = startIndex > 0 ? '... ' : '';
    var ellipsesAfter = endIndex < words.length ? ' ...' : '';
    
    return ellipsesBefore + preview + ellipsesAfter;
  }
  
  function showSearch() {
    searchContainer.classList.add('jtd-search-active');
  }
  
  function hideSearch() {
    searchContainer.classList.remove('jtd-search-active');
    clearActiveResult();
  }
  
  function navigateResults(direction) {
    var results = searchResults.querySelectorAll('.jtd-search-result');
    if (results.length === 0) return;
    
    var activeResult = searchResults.querySelector('.jtd-search-result.active');
    var nextIndex = 0;
    
    if (activeResult) {
      var currentIndex = Array.from(results).indexOf(activeResult);
      nextIndex = currentIndex + direction;
      activeResult.classList.remove('active');
    } else if (direction > 0) {
      nextIndex = 0;
    } else {
      nextIndex = results.length - 1;
    }
    
    // Wrap around
    if (nextIndex < 0) nextIndex = results.length - 1;
    if (nextIndex >= results.length) nextIndex = 0;
    
    results[nextIndex].classList.add('active');
    results[nextIndex].scrollIntoView({ block: 'nearest' });
  }
  
  function selectActiveResult() {
    var activeResult = searchResults.querySelector('.jtd-search-result.active');
    if (activeResult) {
      activeResult.click();
    } else {
      // Select first result if none active
      var firstResult = searchResults.querySelector('.jtd-search-result');
      if (firstResult) {
        firstResult.click();
      }
    }
  }
  
  function clearActiveResult() {
    var activeResult = searchResults.querySelector('.jtd-search-result.active');
    if (activeResult) {
      activeResult.classList.remove('active');
    }
  }
  
  function handleQueryStringSearch() {
    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('q');
    if (query) {
      searchInput.value = query;
      currentInput = query;
      // Wait for search to load
      var checkLoad = function() {
        if (searchLoaded) {
          performSearch(query, ++currentSearchIndex);
        } else {
          setTimeout(checkLoad, 100);
        }
      };
      checkLoad();
    }
  }
  
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  
  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
})();
