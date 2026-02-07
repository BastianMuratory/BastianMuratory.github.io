document.addEventListener('DOMContentLoaded', () => {
  const filterContainer = document.getElementById('artist-filters');
  const filterCollapse = document.getElementById('filterCollapse');
  const filterToggleText = document.getElementById('filter-toggle-text');
  const origamiContainer = document.getElementById('origami-container');
  const lazyPlaceholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

  if (!filterContainer || !origamiContainer) return;

  let selectedArtist = 'all';

  const setToggleText = (text) => {
    if (filterToggleText) filterToggleText.textContent = text;
  };

  filterCollapse?.addEventListener('show.bs.collapse', () => setToggleText('Hide Filters'));
  filterCollapse?.addEventListener('hide.bs.collapse', () => setToggleText('Show Filters'));

  const artists = [...new Set(origamiData.map(({ artist }) => artist))].sort();
  artists.forEach(artist => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline-secondary btn-sm';
    btn.dataset.filter = artist;
    btn.textContent = artist;
    filterContainer.appendChild(btn);
  });

  const setActiveButton = (activeButton) => {
    filterContainer.querySelectorAll('button[data-filter]').forEach(button => {
      button.classList.toggle('active', button === activeButton);
    });
  };

  const applyFilters = () => {
    origamiContainer.querySelectorAll('.origami-card').forEach(card => {
      const cardArtist = card.getAttribute('data-artist');
      const matchesArtist = selectedArtist === 'all' || cardArtist === selectedArtist;
      card.style.display = matchesArtist ? '' : 'none';
    });
  };

  const loadDeferredImages = (rootElement) => {
    rootElement.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  };

  const renderOrigamiCards = () => {
    origamiContainer.innerHTML = origamiData.map((origami, index) => `
      <div class="col-12 col-sm-6 col-lg-4 origami-card" data-artist="${origami.artist}">
        <div class="card h-100 shadow-sm">
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

    document.querySelectorAll('.carousel').forEach(carouselElement => {
      new bootstrap.Carousel(carouselElement, { interval: false, wrap: true });
      carouselElement.addEventListener('slide.bs.carousel', event => {
        if (event.relatedTarget) loadDeferredImages(event.relatedTarget);
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadDeferredImages(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '300px 0px', threshold: 0.01 });

    const cards = document.querySelectorAll('.origami-card');
    cards.forEach(card => observer.observe(card));
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        loadDeferredImages(card);
        observer.unobserve(card);
      }
    });
  };

  filterContainer.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    selectedArtist = button.dataset.filter || 'all';
    setActiveButton(button);
    applyFilters();
  });

  renderOrigamiCards();
});
