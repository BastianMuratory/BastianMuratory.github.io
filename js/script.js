// Language Management
(function() {
  const langBtn = document.getElementById('lang-toggle');
  
  // Initialize language from localStorage or default to 'fr'
  function initLanguage() {
    const currentLang = localStorage.getItem('language') || 'fr';
    document.documentElement.lang = currentLang;
    document.body.dataset.lang = currentLang;
    updateButtonText(currentLang);
  }

  // Update button text based on current language
  function updateButtonText(lang) {
    if (langBtn) {
      const langText = langBtn.querySelector('.lang-text');
      langText.textContent = lang === 'fr' ? 'EN' : 'FR';
    }
  }

  // Toggle language on button click
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const currentLang = localStorage.getItem('language') || 'fr';
      const newLang = currentLang === 'fr' ? 'en' : 'fr';
      
      localStorage.setItem('language', newLang);
      document.documentElement.lang = newLang;
      document.body.dataset.lang = newLang;
      updateButtonText(newLang);
      
      // Dispatch custom event for other components to listen
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: newLang } }));
    });
  }

  // Initialize on page load
  initLanguage();
})();

if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}