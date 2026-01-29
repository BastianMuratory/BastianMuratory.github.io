// Projects filter initialization - dynamically renders from data
document.addEventListener('DOMContentLoaded', function() {
  const filterContainer = document.getElementById('feature-filters');
  const filterCollapse = document.getElementById('filterCollapse');
  const filterToggleText = document.getElementById('filter-toggle-text');
  const projectsContainer = document.getElementById('projects-container');
  let selectedFilters = new Set();

  // Update collapse button text
  filterCollapse?.addEventListener('show.bs.collapse', () => {
    if (filterToggleText) filterToggleText.textContent = 'Hide Filters';
  });
  filterCollapse?.addEventListener('hide.bs.collapse', () => {
    if (filterToggleText) filterToggleText.textContent = 'Show Filters';
  });

  // Initialize images on page load
  initializeImages();

  // Extract all unique tags from data
  const allTags = new Set();
  projectsData.forEach(project => {
    project.tags.split(',').forEach(tag => allTags.add(tag.trim()));
  });

  // Generate filter buttons for each tag
  const sortedTags = Array.from(allTags).sort();
  sortedTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline-secondary btn-sm';
    btn.setAttribute('data-filter', tag);
    btn.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
    btn.addEventListener('click', () => toggleFilter(tag, btn));
    filterContainer.appendChild(btn);
  });

  // Setup "All" button
  const allBtn = filterContainer.querySelector('button[data-filter="all"]');
  if (allBtn) {
    allBtn.addEventListener('click', () => {
      selectedFilters.clear();
      document.querySelectorAll('#feature-filters button').forEach(btn => btn.classList.remove('active'));
      allBtn.classList.add('active');
      applyFilters();
    });
  }

  function toggleFilter(tag, btn) {
    const allBtn = filterContainer.querySelector('button[data-filter="all"]');
    
    if (selectedFilters.has(tag)) {
      selectedFilters.delete(tag);
      btn.classList.remove('active');
    } else {
      selectedFilters.add(tag);
      btn.classList.add('active');
    }

    if (allBtn) allBtn.classList.toggle('active', selectedFilters.size === 0);
    applyFilters();
  }

  function applyFilters() {
    const projectCards = projectsContainer.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      if (selectedFilters.size === 0) {
        card.style.display = '';
      } else {
        const tags = card.getAttribute('data-tags') || '';
        const cardTags = new Set(tags.split(',').map(t => t.trim()));
        const hasMatch = Array.from(selectedFilters).some(filter => cardTags.has(filter));
        card.style.display = hasMatch ? '' : 'none';
      }
    });
  }

  function initializeImages() {
    const projectCards = projectsContainer.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      const imageUrl = card.getAttribute('data-image');
      if (imageUrl && imageUrl.trim() !== '') {
        const cardElement = card.querySelector('.card');
        const existingImage = cardElement.querySelector('.card-img-top');
        
        if (!existingImage) {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.className = 'card-img-top';
          img.alt = card.querySelector('.card-title')?.textContent || 'Project';
          cardElement.insertBefore(img, cardElement.firstChild);
        }
      }
    });
  }
});
