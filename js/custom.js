// Add active class to the current button (highlight it) 
const navLinkEls = document.querySelectorAll('.btn');

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', function() {
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');
    });
});