import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Layout from '../Layout';

function Catalogue() {
    return (
        <Layout>
            <div className="search">
                <form className={'flex flex-row'}>
                    <input
                        type="text"
                        name="search"
                        placeholder="search for instant help from the guides..."
                    />
                    <p className={'button bg-white mx-2'} type="submit">Search</p>
                </form>
            </div>
            <div className="grid grid-cols-2 gap-10 items-center justify-center flex-wrap mb-8 mt-4 text-4xl">
                <Link to="/hardware-course" className="button bg-cover bg-catalogue-background h-[3em]">
                    <p className="text-white text-center font-outline-1">Hardware</p>
                </Link>
                <Link to="/software-course" className="button bg-cover bg-catalogue-background h-[3em]">
                    <p className="text-white text-center font-outline-1">Software</p>
                </Link>
                <Link to="/software-course" className="button bg-cover bg-catalogue-background h-[3em]">
                    <p className="text-white text-center font-outline-1">Keyboard Macros</p>
                </Link>
                <Link to="/software-course" className="button bg-cover bg-catalogue-background h-[3em]">
                    <p className="text-white text-center font-outline-1">Computer Customization</p>
                </Link>
                <Link to="/software-course" className="button bg-cover bg-catalogue-background h-[3em]">
                    <p className="text-white text-center font-outline-1">Troubleshooting</p>
                </Link>
                <Link to="/software-course" className="button bg-cover bg-catalogue-background h-[3em]">
                    <p className="text-white text-center font-outline-1">Other</p>
                </Link>


                {/* ... other course buttons ... */}
            </div>
        </Layout>
    );
}

export default Catalogue;
