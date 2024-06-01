document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.wrapper');
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');
    const forgotPasswordForm = document.querySelector('.form-box.forgot-password');
 
    const loginLinks = document.querySelectorAll('.login-link');
    const registerLinks = document.querySelectorAll('.register-link');
    const forgotPasswordLink = document.querySelector('.forgot-password-link');
    const closeIcon = document.querySelector('.icon-close');
 
    // Function to hide all forms
    function hideAllForms() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
    }
 
    // Function to show a specific form
    function showForm(form) {
        hideAllForms();
        form.style.display = 'block';
        wrapper.classList.add('active-popup'); // Ensure the wrapper is visible
    }
 
    // Event listeners for each link
    loginLinks.forEach(link => link.addEventListener('click', () => showForm(loginForm)));
    registerLinks.forEach(link => link.addEventListener('click', () => showForm(registerForm)));
    forgotPasswordLink.addEventListener('click', () => showForm(forgotPasswordForm));
 
    // Event listener for closing the popup
    closeIcon.addEventListener('click', () => {
        hideAllForms(); // Hide all forms when closing
        wrapper.classList.remove('active-popup'); // Hide the popup
    });
 
    // Ensures that clicks inside the form do not close the form
    document.querySelectorAll('.form-box').forEach(box => {
        box.addEventListener('click', event => event.stopPropagation());
    });
});

window.onload = function() {
    document.getElementById('spinner').style.display = 'none';
};
