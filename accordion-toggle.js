/**
 * Accordion / Read More Toggle
 * ----------------------------
 * Toggles visibility of hidden content and updates the button text.
 */

document.querySelectorAll('.js-toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        const target = document.querySelector(this.dataset.target);
        if (!target) return;

        target.classList.toggle('hidden');
        target.style.maxHeight = target.classList.contains('hidden') ? '0' : target.scrollHeight + 'px';
        this.textContent = this.textContent === 'Read More' ? 'Read Less' : 'Read More';
    });
});
