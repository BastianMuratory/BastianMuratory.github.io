// Projects filter initialization - dynamically renders from data
document.addEventListener('DOMContentLoaded', function() {
  const filterContainer = document.getElementById('feature-filters');
  const filterCollapse = document.getElementById('filterCollapse');
  const filterToggleText = document.getElementById('filter-toggle-text');
  const professionalContainer = document.getElementById('professional-projects');
  const personalContainer = document.getElementById('personal-projects');
  const academicContainer = document.getElementById('academic-projects');
  let selectedFilters = new Set();

  // Update collapse button text
  filterCollapse?.addEventListener('show.bs.collapse', () => {
    if (filterToggleText) filterToggleText.textContent = 'Hide Filters';
  });
  filterCollapse?.addEventListener('hide.bs.collapse', () => {
    if (filterToggleText) filterToggleText.textContent = 'Show Filters';
  });

  // Create project card element
  function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'col-12 project-card';
    card.setAttribute('data-tags', project.tags);
    card.setAttribute('data-type', project.type);

    const badgeBgClass = project.type === 'professional' 
      ? 'text-bg-info' 
      : project.type === 'personal' 
      ? 'text-bg-success' 
      : 'text-bg-warning';

    card.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title mb-0">${project.title}</h5>
            <span class="badge ${badgeBgClass}">${project.period}</span>
          </div>
          <p class="card-text">
            ${project.description}
          </p>
          <div class="d-flex gap-2 flex-wrap">
            ${project.tags.split(',').map(tag => `<span class="badge text-bg-light">${capitalizeTag(tag.trim())}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
    return card;
  }

  function capitalizeTag(tag) {
    return tag
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Render projects by category
  function renderProjectsByType() {
    professionalContainer.innerHTML = '';
    personalContainer.innerHTML = '';
    academicContainer.innerHTML = '';

    projectsData.forEach(project => {
      const card = createProjectCard(project);
      if (project.type === 'professional') {
        professionalContainer.appendChild(card);
      } else if (project.type === 'personal') {
        personalContainer.appendChild(card);
      } else if (project.type === 'academic') {
        academicContainer.appendChild(card);
      }
    });
  }

  // Render all projects
  renderProjectsByType();

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
    btn.textContent = capitalizeTag(tag);
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
    const projectCards = document.querySelectorAll('.project-card');
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
});
