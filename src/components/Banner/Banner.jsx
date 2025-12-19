import React from 'react';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
       <div className='mt-15 flex justify-between items-center gap-22 bg-gray-100 p-20 rounded-2xl'>
        <div>
            <h1 className='font-bold text-5xl mb-6 leading-15'>Books to Freshen up your bookshelf</h1>
            <button className='bg-green-500 btn text-white'>View The List</button>
        </div>
        <div>
            <img src={bannerImg} />
        </div>
       </div>
    );
};

export default Banner;