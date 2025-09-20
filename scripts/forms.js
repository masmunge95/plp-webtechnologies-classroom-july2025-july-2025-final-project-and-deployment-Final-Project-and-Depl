/// === Form Validation ===
const form = document.querySelector('#form-section form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('success-message');

// Helper function to display an error message for a specific field
const setError = (input, message) => {
    const errorDisplay = document.getElementById(`${input.id}-error`);
    errorDisplay.innerText = message;
    input.classList.add('invalid');
};

// Helper function to clear all error messages and invalid styles
const clearErrors = () => {
    form.querySelectorAll('.error-message').forEach(el => el.innerText = '');
    form.querySelectorAll('input, textarea').forEach(el => el.classList.remove('invalid'));
    successMessage.innerText = '';
};

// This function contains all the validation logic.
const validateForm = () => {
    clearErrors();
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        setError(nameInput, 'Your name is required.');
        isValid = false;
    }

    // Email validation
    if (emailInput.value.trim() === '') {
        setError(emailInput, 'Email is required.');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        setError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === '') {
        setError(messageInput, 'Message is required.');
        isValid = false;
    }

    // If all checks pass, show success message and reset the form
    if (isValid) {
        successMessage.innerText = '✅ Form submitted successfully!';
        // Clear the form after a short delay.
        setTimeout(() => {
            form.reset();
            clearErrors();
        }, 2000);
    }
};

// When the form is submitted, run the validation. If it fails, prevent submission.
form.addEventListener('submit', event => {
    event.preventDefault(); // Always prevent default submission to handle it via JS
    validateForm();
});

// Form Modal
const modal = document.getElementById('form-modal');
const btn = document.getElementById('show-form-btn');
const span = document.getElementsByClassName('close-btn')[0];

if (modal && btn && span) {
    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.classList.add('show');
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.classList.remove('show');
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    };
}

// === FAQ Accordion Functionality ===
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('show');
    });
});
