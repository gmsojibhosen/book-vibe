import React from 'react';
import { useLoaderData } from 'react-router';
import Book from '../Book/Book';

const Books = () => {
    const books = useLoaderData()
    
    return (
        <div>
            <h1 className='font-bold text-3xl my-10 text-center'>Books</h1>
           <section className='grid grid-cols-3 gap-5'>
             {
                books.map(book => <Book key={book.bookId} book = {book} ></Book>)
            }
           </section>
        </div>
    );
};

export default Books;