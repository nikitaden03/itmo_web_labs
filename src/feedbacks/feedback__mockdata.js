document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById("feedbacks__preloader");
    var errorMessage = document.getElementById("feedbacks__error-message");
    var feedback_items = document.querySelectorAll(".feedbacks__item");

    var errorCount = 0
    var successCount = 0

    feedback_items.forEach(function(feedback_item) {
        fetch("https://jsonplaceholder.typicode.com/comments/" + (getRandomInt(499) + 1))
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function (data) {
                feedback_item.querySelector('.feedbacks__text').textContent = data.body;
                feedback_item.querySelector('.feedbacks__a').textContent = data.email;
                successCount += 1
            })
            .catch(function (error) {
                errorCount += 1
            });
    });

    feedback_items.forEach(function(feedback_item) {
        fetch("https://jsonplaceholder.typicode.com/users/" + (getRandomInt(9) + 1))
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(function (data) {
                feedback_item.querySelector('.feedbacks__name').textContent = data.name;
                feedback_item.querySelector('.feedbacks__locations').textContent = data.address.city + ' → София';
                successCount += 1
            })
            .catch(function (error) {
                errorCount += 1
            });
    });


    if (errorCount === 0) {
        preloader.style.display = "none";
    } else {
        preloader.style.display = "none";
        errorMessage.textContent = "⚠ Что-то пошло не так";
    }

});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
