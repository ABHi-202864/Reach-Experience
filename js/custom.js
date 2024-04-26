// Add active class to the current button (highlight it) 
document.addEventListener("DOMContentLoaded", function () {
    // Get all the navigation links
    const links = document.querySelectorAll('.nav a');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent default link behavior
            event.preventDefault();

            // Remove active class from all links
            links.forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});