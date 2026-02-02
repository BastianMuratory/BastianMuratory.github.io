// Utility functions
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHtml = '<span style="color: #f08c5d;">★</span>'.repeat(fullStars);
  if (hasHalfStar) starsHtml += '<span style="color: #f08c5d;">☆</span>';
  starsHtml += '<span style="color: #d3d3d3;">☆</span>'.repeat(5 - Math.ceil(rating));
  return starsHtml;
}

function capitalizeGenre(genre) {
  return genre
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Initialize filters and rendering
document.addEventListener('DOMContentLoaded', function() {
  const genreFilterContainer = document.getElementById('genre-filters');
  const yearFilterContainer = document.getElementById('year-filters');
  const ratingFilterContainer = document.getElementById('rating-filters');
  const sortSelect = document.getElementById('sort-select');
  const reviewsContainer = document.getElementById('reviews-container');
  const filterCollapse = document.getElementById('filterCollapse');
  const filterToggleText = document.getElementById('filter-toggle-text');

  let selectedYear = 'all';
  let selectedRating = 'all';
  let selectedGenres = new Set();

  // Update collapse button text
  filterCollapse?.addEventListener('show.bs.collapse', () => {
    if (filterToggleText) filterToggleText.textContent = 'Hide Filters';
  });
  filterCollapse?.addEventListener('hide.bs.collapse', () => {
    if (filterToggleText) filterToggleText.textContent = 'Show Filters';
  });

  // Create review card element
  function createReviewCard(game) {
    const card = document.createElement('div');
    card.className = 'col-12 review-card';
    card.setAttribute('data-genres', game.genres);
    card.setAttribute('data-rating', game.rating);
    card.setAttribute('data-date', game.date);
    card.setAttribute('data-year', game.date);

    const stars = generateStars(game.rating);
    const year = game.date;

    const imageHtml = game.image 
      ? `<div class="col-md-4 d-flex ${game.squareImage ? 'align-items-center justify-content-end' : ''}">
           <img loading="lazy" src="${game.image}" class="${game.squareImage ? 'img-fluid rounded' : 'img-fluid rounded-start h-100 w-100'}" style="${game.squareImage ? 'max-width: 50%; height: auto; object-fit: contain;' : 'object-fit: cover;'}" alt="${game.title}">
         </div>` 
      : '';

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="row g-0">
          <div class="${game.image ? 'col-md-8' : 'col-12'}">
            <div class="card-body">
              <div class="mb-2">
                <h5 class="card-title d-inline mb-0">${game.title}</h5>
                <span class="badge ms-2" style="background-color: transparent; border: 2px solid #f08c5d; color: inherit;">${stars}</span>
              </div>
              <small class="text-muted">${year}</small>
              <p class="card-text mt-3">${game.description || 'Jeu intéressant'}</p>
              <div class="d-flex gap-2 flex-wrap">
                ${game.genres.split(',').map(genre => `<span class="badge text-bg-light">${capitalizeGenre(genre)}</span>`).join('')}
              </div>
            </div>
          </div>
          ${imageHtml}
        </div>
      </div>
    `;
    return card;
  }

  // Generate all review cards
  const reviewCards = gamesData.map(createReviewCard);

  // Extract and generate year filters
  const allYears = [...new Set(gamesData.map(g => g.date))].sort((a, b) => b.localeCompare(a));
  allYears.forEach(year => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline-secondary btn-sm';
    btn.setAttribute('data-filter', year);
    btn.textContent = year;
    btn.addEventListener('click', () => setFilter('year', year, btn));
    yearFilterContainer.appendChild(btn);
  });

  // Extract and generate genre filters
  const allGenres = [...new Set(gamesData.flatMap(g => g.genres.split(',')))].sort();
  allGenres.forEach(genre => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline-secondary btn-sm';
    btn.setAttribute('data-filter', genre.trim());
    btn.textContent = capitalizeGenre(genre.trim());
    btn.addEventListener('click', () => toggleGenreFilter(genre.trim(), btn));
    genreFilterContainer.appendChild(btn);
  });

  // Single filter setter
  function setFilter(type, value, btn) {
    if (type === 'year') {
      selectedYear = value;
      document.querySelectorAll('#year-filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    } else if (type === 'rating') {
      selectedRating = value;
      document.querySelectorAll('#rating-filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    applyFiltersAndSort();
  }

  function toggleGenreFilter(genre, btn) {
    const allBtn = genreFilterContainer.querySelector('button[data-filter="all"]');
    if (selectedGenres.has(genre)) {
      selectedGenres.delete(genre);
      btn.classList.remove('active');
    } else {
      selectedGenres.add(genre);
      btn.classList.add('active');
    }
    allBtn?.classList.toggle('active', selectedGenres.size === 0);
    applyFiltersAndSort();
  }

  // Setup "All" buttons
  document.querySelectorAll('[id*="-filters"] button[data-filter="all"]').forEach(btn => {
    btn.addEventListener('click', function() {
      const filterId = this.parentElement.id;
      if (filterId === 'year-filters') {
        selectedYear = 'all';
        document.querySelectorAll('#year-filters button').forEach(b => b.classList.remove('active'));
      } else if (filterId === 'rating-filters') {
        selectedRating = 'all';
        document.querySelectorAll('#rating-filters button').forEach(b => b.classList.remove('active'));
      } else if (filterId === 'genre-filters') {
        selectedGenres.clear();
        document.querySelectorAll('#genre-filters button').forEach(b => b.classList.remove('active'));
      }
      this.classList.add('active');
      applyFiltersAndSort();
    });
  });

  // Setup rating filters
  document.querySelectorAll('#rating-filters button[data-filter]:not([data-filter="all"])').forEach(btn => {
    btn.addEventListener('click', function() {
      setFilter('rating', this.getAttribute('data-filter'), this);
    });
  });

  // Apply filters and sorting
  function applyFiltersAndSort() {
    let filtered = reviewCards.filter(card => {
      const cardYear = card.getAttribute('data-year');
      if (selectedYear !== 'all' && cardYear !== selectedYear) return false;

      if (selectedRating !== 'all') {
        const rating = parseFloat(card.getAttribute('data-rating'));
        if (Math.floor(rating) !== parseInt(selectedRating)) return false;
      }

      if (selectedGenres.size > 0) {
        const genres = card.getAttribute('data-genres').split(',').map(g => g.trim());
        const hasMatch = Array.from(selectedGenres).some(filter => genres.includes(filter));
        if (!hasMatch) return false;
      }

      return true;
    });

    // Sort
    const sortValue = sortSelect?.value || 'date-desc';
    filtered.sort((a, b) => {
      const aDate = a.getAttribute('data-date');
      const bDate = b.getAttribute('data-date');
      const aRating = parseFloat(a.getAttribute('data-rating'));
      const bRating = parseFloat(b.getAttribute('data-rating'));

      if (sortValue === 'date-desc') return bDate.localeCompare(aDate);
      if (sortValue === 'date-asc') return aDate.localeCompare(bDate);
      if (sortValue === 'rating-desc') return bRating - aRating;
      if (sortValue === 'rating-asc') return aRating - bRating;
    });

    // Render
    reviewsContainer.innerHTML = '';
    filtered.forEach(card => reviewsContainer.appendChild(card.cloneNode(true)));
  }

  sortSelect?.addEventListener('change', applyFiltersAndSort);
  applyFiltersAndSort(); // Initial render
});
