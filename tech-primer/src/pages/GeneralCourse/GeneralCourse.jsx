import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Layout from '../../Layout';

const GeneralCourse = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-[2rem] text-center text-4xl justify-center flex-wrap mb-8 mx-28">
                <Link to="/hardware-course" className={'button p-16'}>
                    <p>Hardware Overview</p>
                </Link>
                <Link to="/windows-course" className={'button p-16'}>
                    <p>Windows Interface</p>
                </Link>
                <Link to="/web-course"className={'button p-16'}>
                    <p>Accessing the Web</p>
                </Link>
                <Link to="/shortcuts-course" className={'button p-16'}>
                    <p>Keyboard Shortcuts</p>
                </Link>
                <Link to="/filetypes-course" className={'button p-16'}>
                    <p>File Types</p>
                </Link>
                <Link to="/troubleshooting-course" className={'button p-16'}>
                    <p>Troubleshooting</p>
                </Link>
                <Link to="/secu-course" className={'button p-16'}>
                    <p>Internet Security</p>
                </Link>
            </div>
        </Layout>
    )
}

export default GeneralCourse;