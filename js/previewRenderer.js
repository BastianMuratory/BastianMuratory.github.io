// Dynamic preview rendering for index.html
// Configure how many items to show from each category
const PREVIEW_CONFIG = {
  projectsCount: 2,    // Number of most recent projects to show
  origamiCount: 3,     // Number of most recent origami to show
  gamesCount: 2        // Number of most recent games to show
};

// Helper to convert relative paths for main page context
function adjustImagePath(path) {
  // Convert ../assets/images/ to ./assets/images/ for main page
  return path.replace(/^\.\.\//, './');
}

document.addEventListener('DOMContentLoaded', function() {
  renderProjectsPreview();
  renderOrigamiPreview();
  renderGamesPreview();
});

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return '★'.repeat(fullStars) + (hasHalfStar ? '☆' : '') + '☆'.repeat(emptyStars);
}

function capitalizeGenre(genre) {
  return genre
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
}

function renderProjectsPreview() {
  const container = document.getElementById('projects-preview-container');
  if (!container) return;

  // Show last N projects
  const preview = projectsData.slice(-PREVIEW_CONFIG.projectsCount);

  container.innerHTML = preview.map(project => `
    <div class="col-12">
      <div class="card shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title mb-0">${project.title}</h5>
            <span class="badge text-bg-info">${project.period}</span>
          </div>
          <p class="card-text small">${project.description}</p>
          <div class="d-flex gap-2 flex-wrap mt-2">
            ${project.tags.split(',').map(tag => `<span class="badge text-bg-light">${capitalizeGenre(tag)}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderOrigamiPreview() {
  const container = document.getElementById('origami-preview-container');
  if (!container) return;

  // Show last N origami
  const preview = origamiData.slice(-PREVIEW_CONFIG.origamiCount);

  container.innerHTML = preview.map(origami => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <img src="${adjustImagePath(origami.images[0])}" class="card-img-top" alt="${origami.title}">
        <div class="card-body">
          <h5 class="card-title">${origami.title}</h5>
          <p class="card-text text-muted small">${origami.description}</p>
          <div class="d-flex gap-2 flex-wrap mt-2">
            <span class="badge text-bg-info">${origami.artist}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderGamesPreview() {
  const container = document.getElementById('games-preview-container');
  if (!container) return;

  // Show first N games
  const preview = gamesData.slice(0, PREVIEW_CONFIG.gamesCount);

  container.innerHTML = preview.map(game => {
    const stars = generateStars(game.rating);
    const month = game.month ? new Date(game.date + '-' + game.month + '-01').toLocaleString('en-US', { month: 'short', year: 'numeric' }) : game.date;

    return `
      <div class="col-12 col-lg-6">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <h5 class="card-title mb-0">${game.title}</h5>
              <span class="badge text-bg-warning">${stars}</span>
              <small class="text-muted ms-2">${month}</small>
            </div>
            <p class="card-text small">${game.description || 'Jeu intéressant'}</p>
            <div class="d-flex gap-2 flex-wrap">
              ${game.genres.split(',').map(genre => `<span class="badge text-bg-light">${capitalizeGenre(genre)}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}
