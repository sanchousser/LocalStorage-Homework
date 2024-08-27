// const toDoForm = document.querySelector('.todo__form');
// const selectedToDos = JSON.parse(localStorage.getItem('selectedToDos')) || {};
// initForm();


// toDoForm.addEventListener('change', onInputChange);



// function onInputChange(e) {
//     selectedToDos[e.target.value] = e.target.checked;
//     localStorage.setItem('selectedToDos', JSON.stringify(selectedToDos));
// }

// function initForm() {
//     const checkedItems = localStorage.getItem('selectedToDos');
//     if (checkedItems) {
//         const parsedItems = JSON.parse(checkedItems);
//         Object.entries(parsedItems).forEach(([value, checked]) => {
//             const checkBox = toDoForm.querySelector(`input[value="${value}"]`);
//             if (checkBox) {
//                 checkBox.checked = checked;
//             }
//         });
//     }
// }
