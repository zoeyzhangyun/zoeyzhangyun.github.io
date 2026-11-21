// Filtering enhances the Work page. All project links remain available without JavaScript.
document.querySelectorAll('[data-project-browser]').forEach(browser => {
  const buttons = browser.querySelectorAll('[data-filter]');
  const cards = browser.querySelectorAll('.project');
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
  }));
});
