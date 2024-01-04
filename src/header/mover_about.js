document.getElementById('about_link').addEventListener('click', function(e) {
    e.preventDefault();

    var formSection = document.getElementById('form');
    formSection.scrollIntoView({ behavior: 'smooth' });
});
