document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var sidebar = document.getElementById('sidebar');

    hamburgerMenu.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-open');
    });
});
