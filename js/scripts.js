document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const links = document.querySelectorAll('.sidebar ul li a');
    const content = document.getElementById('content');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');
            loadPage(page);
            sidebar.classList.remove('show');
        });
    });

    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
            })
            .catch(err => console.warn('Failed to load page', err));
    }
});
