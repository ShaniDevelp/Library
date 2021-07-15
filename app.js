
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var content = document.querySelector(".content");
var content_span = document.getElementsByClassName("close_content");
var submitt = document.querySelector('#add_button');
var container = document.querySelector('.container');
var book_heading = document.querySelector('.book_title');


let myLibrary = [];


function get_book(){
    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    var pages = document.querySelector('#pages').value;
    var read = document.querySelector('#read').checked;
    return new book(title, author, pages, read);
}


function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};


submitt.addEventListener('click', addbook);


function addbook(){
    myLibrary.push(get_book());
    clear();
    modal.style.display = "none";
    container.innerHTML = '';
    display_book(myLibrary);
}

function removeFromLibrary(bookTitle) {
    myLibrary = myLibrary.filter((book) => book.title !== bookTitle);
    return myLibrary;
}


function clear(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;
}

function display_book(libraryList){
    for (let book of libraryList) {  
        createcard(book);
    };
};



// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
  
  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  

// Create Card for new book
function createcard(book){
    var new_content = document.createElement('div');
    var span = document.createElement('span');
    var book_name = document.createElement('h2')
    var book_author = document.createElement('h3');
    var book_pages = document.createElement('h3');
    var book_read = document.createElement('button');

    new_content.className = 'content';
    span.className = 'close_content';
    book_name.className = 'book_title';
    


    span.innerHTML = '&times;';
    book_name.innerHTML = book.title
    book_author.innerHTML = `By: ${book.author}`;
    book_pages.innerHTML = `Number of pages: ${book.pages}`;
    if (book.read) {
        book_read.innerHTML = 'Read';
        book_read.className = 'isread_button';
    } else {
        book_read.innerHTML = 'Not Read';
        book_read.className = 'notread_button';
    }

    
    new_content.appendChild(span);
    new_content.appendChild(book_name);
    new_content.appendChild(book_author);
    new_content.appendChild(book_pages);
    new_content.appendChild(book_read) 
    container.appendChild(new_content); 
}



container.addEventListener('click', Bookinput);

function Bookinput(e){
    if (e.target.className == 'close_content') {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        removeFromLibrary(e.target.parentNode.childNodes[1].innerHTML);
    }
};