import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx'; 
import './Books.css'; 

function Books() {
    // State variables for managing books data, filtered books, error, and search text
    const [booksData, setBooksData] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');

    // Fetching books data from API on component mount
    useEffect(() => {
        axios.get("https://reactnd-books-api.udacity.com/books", {
            headers: { 'Authorization': 'whatever-you-want' }
        })
        .then((res) => {
            console.log(res.data.books); 
            setBooksData(res.data.books); 
            setFilteredBooks(res.data.books);
        })
        // handle errors
        .catch((err) => {
            if (err.response && err.response.status === 404) {
                console.log("Status code: 404");
                console.log("Website not found");
                setError(err.message); 
            }
        });
    }, []); 

    // Function to handle search text change
    const handleSearchChange = (e) => {
        setSearchText(e.target.value); 
        filterBooks(e.target.value);
    };

    // Function to filter books based on search text
    const filterBooks = (text) => {
        const filtered = booksData.filter(book =>
            book.title.toLowerCase().includes(text.toLowerCase()) 
        );
        setFilteredBooks(filtered); 
    };

    return (
        <div>
            {error && <h1>404 not Found</h1>}
            <div>
                <div className='search-container'>
                    {/* Input field for searching books */}
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={searchText}
                        onChange={handleSearchChange}
                        className='search'
                    />
                </div>
                {/* Container for displaying books grid */}
                <div className="grid-container">
                    {filteredBooks.map((book) => (
                        <div key={book.id} className="book-item">
                            <img src={book.imageLinks.smallThumbnail} alt='image' />
                            <div className="book-details">
                                <div><h3>Title: </h3> <p> {book.title}</p></div> 
                                <div><h3>Author: </h3> {book.authors.join(", ")} </div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Books; 
