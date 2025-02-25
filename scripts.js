document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
