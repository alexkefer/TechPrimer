import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import '../App.css'; // Import any header-specific styles
import { FaBook } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";



function Header() {
    const goBack = () => {
        window.history.back();
    }
    return (
        <header>
            <div className="header p-1 bg-black bg-opacity-25">
                <Link to="/" className={'button flex'}>
                    <FaBook className={'mt-2'}/>
                    <p className={'ml-2'}>
                        Home
                    </p>
                </Link>
                <div className={'bg-white bg-opacity-25 px-2 py-1 rounded-md font-semibold'}>Tech Primer</div>
                <Link to="/settings" className={'button flex'}>
                    <IoSettingsSharp className={'mt-2'}/>
                    <p className={'ml-2'}>
                        Settings
                    </p>
                </Link>
            </div>
            <div onClick={goBack} className="subheader mx-2 button p-2 w-[6em] text-center">
                <p id="backButton" className={'px-2 py-0.5'}>
                    Go Back
                </p> {/* Note: Add back button functionality */}
            </div>
        </header>
    );
}

export default Header;
