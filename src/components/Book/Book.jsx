import { Star } from 'lucide-react';
import React from 'react';

const Book = ({book}) => {
    const {bookName,author,image,rating,tags,yearOfPublishing} = book;

   
    return (
          <div className="card bg-base-100 w-96 shadow-sm border border-gray-300 p-6 hover:-translate-y-1 transition-transform duration-200">
  <figure className='bg-[#F3F3F3] py-8'>
    <img
      src={image} className='h-40'
      alt="Shoes" />
  </figure>
  <div className="card-body border-b border-dashed  border-gray-300">
    <div>
      {
        tags.map((tag, index )=> <button key={index} className='btn mr-3 text-green-400 bg-green-50'>{tag}</button>
      )
      }
    
    </div>
    <h2 className="card-title">{bookName} <button className='btn bg-green-100'>{yearOfPublishing}</button></h2>
    <p className='font-semibold text-md'>By : {author}</p>
    <div className="flex justify-between items-center">
      <span>Fiction</span>
      <div className='flex items-center gap-2'>
        <span>{rating}</span>
        <Star/>
      </div>
    </div>
  </div>
</div>
    );
};

export default Book;