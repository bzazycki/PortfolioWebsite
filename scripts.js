// Function that shows a particular section (and hides all other ones)
function showSection(sectionId) {
    
    // Remove active tag from all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
        // set display attribute (invisible)
        section.style.display = 'none';
    });

    // set const variable for current section
    const section = document.getElementById(sectionId);

    // set display attribute (visible)
    section.style.display = 'block';
    
    // set proper timeout for fade-in/fade-out
    setTimeout(() => {section.classList.add('active');}, 10);
}


// Event Listener: Wait until HTML is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Call function to show home section
    showSection('home');

    // Select all nav-link elements, add to a variable
    const navLinks = document.querySelectorAll('.nav-link');

    // For each nav-link in the array 'navLinks'...
    navLinks.forEach(link => {
        // Add a click event listener
        link.addEventListener('click', function() {
            // Remove the 'active' class from all nav-links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // Add the 'active' class to the clicked nav-link
            link.classList.add('active');
        });
    });
});
