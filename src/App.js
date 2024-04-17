import logo from './books.png';
import './App.css';
import { useState } from "react";

const Books = {
  Fiction: {
    book1: "Shiva Trilogy",
    book2: "Harry Potter and the Sorcerer's Stone",
    rating1: 5,
    rating2: 4.5
  },

  Business: {
    book1: "Never Split the Difference",
    book2: "Loonshots",
    rating1: 3.5,
    rating2: 5
  },

  JavaScript: {
    book1: "Eloquent JavaScript",
    book2: "You Don't Know JS",
    rating1: 4,
    rating2: 3.5
  }
}


function App() {

  let [bookName, setBooks] = useState('JavaScript');

  const InputButtonHandler = (event) => {
    setBooks(event.target.innerText);
  }

  return (
    <div className="App flex">
      <header id="header" className="flex">
        <img src={logo} alt="Books" height="35" />
        <h1>Good Books</h1>
      </header>
      <main id="main">
        <p>Check out the good books. Select a genre to get started.</p>

        <div id="books-button-container" className="flex">
          <button className="books-button" onClick={InputButtonHandler}>JavaScript</button>
          <button className="books-button" onClick={InputButtonHandler}>Fiction</button>
          <button className="books-button" onClick={InputButtonHandler}>Business</button>
        </div>

        <hr id="divider" />

        <div id="books-name-container">
          <div className="book">
            <p className="title">{Books[bookName]["book1"]}</p>
            <p className="rating">{Books[bookName]["rating1"]}/5</p>
          </div>
          <div className="book">
            <p className="title">{Books[bookName]["book2"]}</p>
            <p className="rating">{Books[bookName]["rating2"]}/5</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
