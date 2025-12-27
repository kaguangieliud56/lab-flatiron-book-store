
const bookStore = {
  name: "Flatbooks Technical Books",
  books: [
    {
      title: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      image: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
      title: "HTML & CSS: Design and Build Websites",
      author: "Jon Duckett",
      image: "https://images-na.ssl-images-amazon.com/images/I/81b2kK9s4RL.jpg"
    },
    {
      title: "JavaScript & JQuery: Interactive Front-End Web Development",
      author: "Jon Duckett",
      image: "https://images-na.ssl-images-amazon.com/images/I/81WpC0R3YcL.jpg"
    },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      image: "https://images-na.ssl-images-amazon.com/images/I/91BsnP-F0rL.jpg"
    }
  ]
};


const bookStoreTitle = document.getElementById("header");
bookStoreTitle.innerHTML = bookStore.name;


const placeholder = document.getElementById("delete-this");
if (placeholder) {
  placeholder.remove();
}

const bookList = document.getElementById("book-list");


bookStore.books.forEach(book => {
 
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

 
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.image;

  
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  
  bookList.appendChild(bookContainer);
});
