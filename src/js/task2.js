const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('submit', onFormSubmit);

getLocalStorage()

function onFormSubmit(e) {
    e.preventDefault()
    const formData = {
        name: e.target.name.value,
        message: e.target.name.value,
    }

    console.log(formData);

    localStorage.setItem('feedbackData', JSON.stringify(formData))
    feedbackForm.reset()

}


function getLocalStorage() {
    const savedData =  localStorage.getItem('feedbackData');
    if(savedData) {
        const newData = JSON.parse(savedData)
        feedbackForm.elements.name.value = newData.name
        feedbackForm.elements.message.value = newData.message
    }
} 