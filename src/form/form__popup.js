document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');

    // Валидирую email в форме, поэтому здесь скип
    if (!validatePhone(phoneInput.value)) {
        alert('Пожалуйста, введите корректный номер телефона!');
        return;
    }

    var popupName = document.getElementById('form__popup-name');
    var popupEmail = document.getElementById('form__popup-email');
    var popupPhone = document.getElementById('form__popup-phone');

    popupName.textContent = nameInput.value;
    popupEmail.textContent = emailInput.value;
    popupPhone.textContent = phoneInput.value;

    showPopup();
    resetForm();
});

document.getElementById('form__popup-close').addEventListener('click', function() {
    hidePopup();
});

function validatePhone(phone) {
    var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var phoneCleared = phone.replace(/\s/g, '').replace(/[()-]/g, '');
    return phoneRegex.test(phoneCleared);
}

function showPopup() {
    var overlay = document.getElementById('form__popup-overlay');
    var popup = document.getElementById('form__popup');

    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function hidePopup() {
    var overlay = document.getElementById('form__popup-overlay');
    var popup = document.getElementById('form__popup');

    overlay.style.display = 'none';
    popup.style.display = 'none';
}

function resetForm() {
    document.getElementById('contact-form').reset();
}