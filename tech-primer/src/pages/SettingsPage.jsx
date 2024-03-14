import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './switch.css';
import Layout from '../Layout';

function Settings() {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // State for managing the theme

    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
        // You might apply a 'dark' class to the body here for the theme change
    };

    return (
        <Layout>
            <div className="grid button-grid">
                {/* Commented sections ... */}

                <div className="panel">
                    <h1>Display</h1>
                    <div className="inline">
                        <p>Theme:</p>
                        <label className="switch">
                            <input type="checkbox" checked={isDarkTheme} onChange={handleThemeChange} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                {/* Other panels similarly... */}
            </div>
        </Layout>
    );
}

export default Settings;
