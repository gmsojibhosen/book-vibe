import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <>
            <Navbar/>
            <main className='max-w-[1200px] mx-auto'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Root;