import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Layout from '../../Layout';

const GeneralCourse = () => {
    return (
        <Layout>
            <div className="flex flex-row gap-[2rem] text-center justify-center flex-wrap mb-8">
            <Link to="/textbox" className={'button'}>
                    <p>Textbox Test</p>
                </Link>
                <Link to="/generalcourses/hardwareoverview" className={'button'}>
                    <p>Hardware Overview</p>
                </Link>
                <Link href="generalcourses/wip.html" className={'button'}>
                    <button>Windows Interface</button>
                </Link>
                <Link href="generalcourses/wip.html" className={'button'}>
                    <button>Accessing the Web</button>
                </Link>
                <Link href="generalcourses/wip.html" className={'button'}>
                    <button>Keyboard Shortcuts</button>
                </Link>
                <Link href="generalcourses/wip.html" className={'button'}>
                    <button>File Types</button>
                </Link>
                <Link href="generalcourses/wip.html" className={'button'}>
                    <button>Troubleshooting</button>
                </Link>
                <Link href="generalcourses/wip.html" className={'button'}>
                    <button>Internet Security</button>
                </Link>
            </div>
        </Layout>
    )
}

export default GeneralCourse;