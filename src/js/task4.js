const form = document.querySelector('.bookmark-form');
const title = document.getElementById('bookmarkTitle');
const url = document.getElementById('bookmarkUrl');
const list = document.getElementById('bookmarksList');


const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];


form.addEventListener('submit', onBookmarkAdd);

renderBookmarks();

function onBookmarkAdd(e) {
    e.preventDefault();




    if (title.value === '') {
        alert('Enter title for a bookmark!')
    } else {

        const titleValue = title.value
        const urlValue = url.value

        bookmarks.push({title: titleValue, url: urlValue})
        saveBookmarks();
        renderBookmarks();

    }


}

function saveBookmarks() {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}

function renderBookmarks() {
    list.innerHTML = ''
    bookmarks.forEach(bookmark => {
        list.insertAdjacentHTML('beforeend', `<li><a href="${bookmark.url}">${bookmark.title}</a><button type="button class="delete-btn">delete bookmark</button></li>`)
    })
}

// function deleteBtn(e) {
//     if(e.target.classList('delete-btn')) {

//     }
// }

window.deleteBtn = index => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.splice(index, 1);
    saveBookmarks(bookmarks);
    renderBookmarks()

}