/* search.js -- Exit Velo homepage search & filter */

(function () {
  'use strict';

  const dataEl = document.getElementById('article-search-data');
  if (!dataEl) return;
  const articles = JSON.parse(dataEl.textContent);

  const searchInput = document.getElementById('article-search');
  const categoryPills = document.getElementById('category-pills');
  const levelPills = document.getElementById('level-pills');
  const noResults = document.getElementById('no-results');
  const clearBtn = document.getElementById('clear-filters');

  let activeCategory = 'all';
  let activeLevel = 'all';
  let searchQuery = '';

  // Initialize aria-pressed on all pills
  document.querySelectorAll('.search-filters__pill').forEach(function (p) {
    p.setAttribute('aria-pressed', p.classList.contains('search-filters__pill--active') ? 'true' : 'false');
  });

  function applyFilters() {
    const query = searchQuery.toLowerCase().trim();
    let visibleCount = 0;

    articles.forEach(function (article) {
      const card = document.querySelector(
        '.article-card[data-url="' + CSS.escape(article.url) + '"]'
      );
      if (!card) return;

      const catMatch =
        activeCategory === 'all' || article.category === activeCategory;

      const lvlMatch =
        activeLevel === 'all' || article.level === activeLevel;

      let textMatch = true;
      if (query) {
        const haystack = (
          article.title + ' ' +
          article.description + ' ' +
          article.keywords.join(' ')
        ).toLowerCase();
        textMatch = query.split(/\s+/).every(function (word) {
          return haystack.includes(word);
        });
      }

      const visible = catMatch && lvlMatch && textMatch;
      card.hidden = !visible;
      if (visible) visibleCount++;
    });

    noResults.hidden = visibleCount > 0;
  }

  let debounceTimer;
  searchInput.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      searchQuery = searchInput.value;
      applyFilters();
    }, 150);
  });

  categoryPills.addEventListener('click', function (e) {
    const pill = e.target.closest('.search-filters__pill');
    if (!pill) return;
    categoryPills.querySelectorAll('.search-filters__pill').forEach(function (p) {
      p.classList.remove('search-filters__pill--active');
      p.setAttribute('aria-pressed', 'false');
    });
    pill.classList.add('search-filters__pill--active');
    pill.setAttribute('aria-pressed', 'true');
    activeCategory = pill.dataset.category;
    applyFilters();
  });

  levelPills.addEventListener('click', function (e) {
    const pill = e.target.closest('.search-filters__pill');
    if (!pill) return;
    levelPills.querySelectorAll('.search-filters__pill').forEach(function (p) {
      p.classList.remove('search-filters__pill--active');
      p.setAttribute('aria-pressed', 'false');
    });
    pill.classList.add('search-filters__pill--active');
    pill.setAttribute('aria-pressed', 'true');
    activeLevel = pill.dataset.level;
    applyFilters();
  });

  clearBtn.addEventListener('click', function () {
    searchInput.value = '';
    searchQuery = '';
    activeCategory = 'all';
    activeLevel = 'all';
    document.querySelectorAll('.search-filters__pill').forEach(function (p) {
      p.classList.remove('search-filters__pill--active');
      p.setAttribute('aria-pressed', 'false');
    });
    categoryPills.querySelector('[data-category="all"]').classList.add('search-filters__pill--active');
    categoryPills.querySelector('[data-category="all"]').setAttribute('aria-pressed', 'true');
    levelPills.querySelector('[data-level="all"]').classList.add('search-filters__pill--active');
    levelPills.querySelector('[data-level="all"]').setAttribute('aria-pressed', 'true');
    applyFilters();
  });
})();
