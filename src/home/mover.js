document.getElementById('home__button').addEventListener('click', function(e) {
    e.preventDefault();

    var formSection = document.getElementById('form');
    formSection.scrollIntoView({ behavior: 'smooth' });
});