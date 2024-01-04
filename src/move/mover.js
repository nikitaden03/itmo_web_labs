document.getElementById('move__circle_top').addEventListener('click', function(e) {
    e.preventDefault();

    var homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('move__circle_bottom').addEventListener('click', function(e) {
    e.preventDefault();

    var homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('move__button').addEventListener('click', function(e) {
    e.preventDefault();

    var formSection = document.getElementById('form');
    formSection.scrollIntoView({ behavior: 'smooth' });
});