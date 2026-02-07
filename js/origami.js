// Origami filter initialization - dynamically renders from data
document.addEventListener('DOMContentLoaded', function() {
  const filterContainer = document.getElementById('artist-filters');
  const filterCollapse = document.getElementById('filterCollapse');
  const filterToggleText = document.getElementById('filter-toggle-text');
  const origamiContainer = document.getElementById('origami-container');
  let selectedArtist = 'all';

  // Render all origami cards from data
  renderOrigamiCards();

  // Update collapse button text
  filterCollapse?.addEventListener('show.bs.collapse', () => {
    if (filterToggleText) filterToggleText.textContent = 'Hide Filters';
  });
  filterCollapse?.addEventListener('hide.bs.collapse', () => {
    if (filterToggleText) filterToggleText.textContent = 'Show Filters';
  });

  // Extract all unique artists from origami data
  const allArtists = new Set();
  origamiData.forEach(origami => {
    allArtists.add(origami.artist);
  });

  // Generate filter buttons for each artist
  const sortedArtists = Array.from(allArtists).sort();
  sortedArtists.forEach(artist => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline-secondary btn-sm';
    btn.setAttribute('data-filter', artist);
    btn.textContent = artist;
    btn.addEventListener('click', () => filterByArtist(artist, btn));
    filterContainer.appendChild(btn);
  });

  // Setup "All" button
  const allBtn = filterContainer.querySelector('button[data-filter="all"]');
  if (allBtn) {
    allBtn.addEventListener('click', () => {
      selectedArtist = 'all';
      document.querySelectorAll('#artist-filters button').forEach(btn => btn.classList.remove('active'));
      allBtn.classList.add('active');
      applyFilters();
    });
  }

  function filterByArtist(artist, btn) {
    selectedArtist = artist;
    document.querySelectorAll('#artist-filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
  }

  function applyFilters() {
    const cards = origamiContainer.querySelectorAll('.origami-card');
    cards.forEach(card => {
      const cardArtist = card.getAttribute('data-artist');
      const matchesArtist = selectedArtist === 'all' || cardArtist === selectedArtist;

      if (matchesArtist) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function renderOrigamiCards() {
    const lazyPlaceholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

    origamiContainer.innerHTML = origamiData.map((origami, index) => `
      <div class="col-12 col-sm-6 col-lg-4 origami-card" data-artist="${origami.artist}">
        <div class="card h-100 shadow-sm">
          <!-- Carousel for Origami ${index + 1} -->
          <div id="carousel-${index + 1}" class="carousel slide carousel-fade">
            <div class="carousel-inner">
              ${origami.images.map((img, imgIndex) => `
                <div class="carousel-item ${imgIndex === 0 ? 'active' : ''}">
                  <img
                    src="${lazyPlaceholder}"
                    data-src="${img}"
                    class="d-block w-100 carousel-image"
                    alt="${origami.title} ${imgIndex + 1}"
                    loading="lazy"
                    decoding="async"
                  >
                </div>
              `).join('')}
            </div>
            ${origami.images.length > 1 ? `
              <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${index + 1}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel-${index + 1}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            ` : ''}
          </div>
          <div class="card-body">
            <h5 class="card-title">${origami.title}</h5>
            <p class="card-text">${origami.description}</p>
            <div class="d-flex gap-2 flex-wrap">
              <span class="badge text-bg-info">${origami.artist}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    const loadDeferredImages = (rootElement) => {
      const deferredImages = rootElement.querySelectorAll('img[data-src]');
      deferredImages.forEach(img => {
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
      });
    };

    // Reinitialize carousels after rendering with auto-cycling disabled
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carouselElement => {
      new bootstrap.Carousel(carouselElement, {
        interval: false, // Disable automatic cycling
        wrap: true
      });

      carouselElement.addEventListener('slide.bs.carousel', event => {
        if (event.relatedTarget) {
          loadDeferredImages(event.relatedTarget);
        }
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadDeferredImages(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '300px 0px', threshold: 0.01 });

    document.querySelectorAll('.origami-card').forEach(card => observer.observe(card));
  }
});
