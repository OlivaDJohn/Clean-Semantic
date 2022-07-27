/*var titles = document.getElementsByClassName('title');


Array.from(titles).forEach(element => {
    console.log(element);
});*/
//const WMF = document.querySelector('#book-list li:nth-child(2) .name');

//console.log(WMF.outerHTML);

const books = document.querySelectorAll('#book-list li .name');

//console.log(books);

books.forEach(item => {
    item.textContent += " (book title)";
});

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Books and more...</h2>';
bookList.innerHTML += "<p>This is how you add HTML</p>"