document.getElementById('fireworks-btn').addEventListener('click', function() {
    var fireworksContainer = document.getElementById('dream__firework');
    var firework = document.createElement('div');
    firework.className = 'firework';

    var randomX = Math.random() * fireworksContainer.offsetWidth;
    firework.style.left = randomX + 'px';

    fireworksContainer.appendChild(firework);
});