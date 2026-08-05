// Lets visitors sort the shop list by rating (default) or alphabetically.

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('shop-grid');
    const cards = Array.from(grid.querySelectorAll('.shop-card'));
    const buttons = document.querySelectorAll('.sort-btn');
    const countEl = document.getElementById('shop-count');

    if (countEl) countEl.textContent = cards.length;

    function sortBy(key) {
      const sorted = [...cards].sort((a, b) => {
        if (key === 'rating') {
          return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
        }
        return a.dataset.name.localeCompare(b.dataset.name);
      });
      sorted.forEach((card) => grid.appendChild(card));
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        sortBy(btn.dataset.sort);
      });
    });
  });
})();
