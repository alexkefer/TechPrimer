import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './switch.css';
import Layout from '../Layout';

function Settings() {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // State for managing the theme
    const [ttsEnabled, setTtsEnabled] = useState(false); // State for managing the text-to-speech setting

    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
        // You might apply a 'dark' class to the body here for the theme change
    };

    const handleTtsChange = () => {
        setTtsEnabled(!ttsEnabled);
        // You might apply a 'tts' class to the body
    }

    return (
        <Layout>
            <div className="grid grid-cols-3 grid-rows-2 button-grid gap-2">
                <div className="flex flex-col bg-white rounded-xl p-4 bg-opacity-75 gap-4 drop-shadow-2xl">
                    <h1 className={'text-center font-semibold text-xl'}>Account</h1>
                    <div className={'flex justify-between'}>
                        <p className={'mt-1'}>Username:</p>
                        <input type="text" className={'rounded-md p-1 drop-shadow-xl'}/>
                    </div>
                    <div className={'flex justify-between'}>
                        <p className={'mt-1'}>Password:</p>
                        <input type="password" className={'rounded-md p-1 drop-shadow-xl'}/>
                    </div>
                    <div className={'flex flex-row gap-2 justify-evenly'}>
                        <p className={'button'}>Change Username</p>
                        <p className={'button'}>Change Password</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl p-4 bg-opacity-75 gap-4 drop-shadow-2xl">
                    <h1 className={'text-center font-semibold text-xl'}>Language</h1>
                    <div className={'flex justify-between'}>
                        <p className={'mt-1'}>Language</p>
                        <select className={'rounded-md py-1 px-2'}>
                            <option>English</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className={'flex justify-between'}>
                        <p className={'mt-1 italic text-center p-4'}>Currently Supported Languages English; More To Come!</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl p-4 bg-opacity-75 gap-4 drop-shadow-2xl">
                    <h1 className={'text-center font-semibold text-xl'}>Display</h1>
                    <div className={'flex justify-between'}>
                        <p className={'mt-1'}>Text Size:</p>
                        <select className={'rounded-md p-1'}>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>
                    <div className={'flex justify-between'}>
                        <p className={'mt-1'}>Theme:</p>
                        <label className="switch">
                            <input type="checkbox" checked={isDarkTheme} onChange={handleThemeChange}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl p-4 bg-opacity-75 gap-4 drop-shadow-2xl">
                    <h1 className={'text-center font-semibold text-xl'}>Sound</h1>
                    <div className={'flex justify-between'}>
                        <p className={'mt-1'}>Volume:</p>
                        <input type={'range'} min={0} max={100} className={'rounded-md p-1'}/>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-xl p-4 bg-opacity-75 gap-4 drop-shadow-2xl">
                    <h1 className={'text-center font-semibold text-xl'}>Support</h1>
                    <div className={'flex justify-between'}>
                        <p className={'mt-1 text-center'}>For any further assistance accessing and using our site send us an email at <a className={'underline text-blue-600'} href="mailto:help@techprimer.com">help@techprimer.com</a></p>
                    </div>
                </div>
                <div
                    className="flex flex-col bg-white rounded-xl p-4 bg-opacity-75 gap-4 drop-shadow-2xl">
                    <h1 className={'text-center font-semibold text-xl'}>Accessibility</h1>
                    <div className={'flex justify-between'}>
                        <p className={'mt-1'}>Text-to-Speech:</p>
                        <label className="switch">
                            <input type="checkbox" checked={ttsEnabled} onChange={handleTtsChange}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className={'flex justify-between'}>
                        <p className={'mt-1'}>Colorblind Mode:</p>
                        <select className={'rounded-md p-1'}>
                            <option>Disabled</option>
                            <option>Monochrome</option>
                            <option>Protanopia</option>
                            <option>Deuteranopia</option>
                            <option>Tritanopia</option>
                        </select>
                    </div>
                </div>
                {/* Other panels similarly... */}
            </div>
        </Layout>
    );
}

export default Settings;
