/*var titles = document.getElementsByClassName('title');


Array.from(titles).forEach(element => {
    console.log(element);
});*/
const WMF = document.querySelector('#book-list li:nth-child(2) .name');

//console.log(WMF.outerHTML);

const books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(item => {
    console.log(item.outerHTML);
});