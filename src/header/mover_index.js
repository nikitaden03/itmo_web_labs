document.getElementById('index').addEventListener('click', function(e) {
    e.preventDefault();

    var nextSection = document.getElementById('advantages');
    nextSection.scrollIntoView({ behavior: 'smooth' });
});