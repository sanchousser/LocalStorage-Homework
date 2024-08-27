const form = document.querySelector('.user__form');
const submitBtn = document.getElementById('submit-btn');
const loginBtn = document.getElementById('login-btn');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const userLogin = form.elements.login.value;
    const userPassword = form.elements.password.value;

    const formData = {
        userLogin,
        userPassword
    };

    if (e.submitter === submitBtn) {
        localStorage.setItem('userData', JSON.stringify(formData));
        alert('Signed up successfully');
    }

    if (e.submitter === loginBtn) {
        const savedData = JSON.parse(localStorage.getItem('userData'));

        if (savedData && savedData.userLogin === userLogin && savedData.userPassword === userPassword) {
            alert('Logged in successfully');
        } else {
            alert('Something is wrong');
        }
    }
}
