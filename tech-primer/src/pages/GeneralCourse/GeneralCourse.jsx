import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Layout from '../../Layout';

const GeneralCourse = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-[2rem] text-center text-4xl justify-center flex-wrap mb-8">
                <Link to="/hardware-course" className={'button p-16'}>
                    <p>Hardware Overview</p>
                </Link>
                <Link href="generalcourses/wip.html" className={'button p-16'}>
                    <button>Windows Interface</button>
                </Link>
                <Link href="generalcourses/wip.html" className={'button p-16'}>
                    <button>Accessing the Web</button>
                </Link>
                <Link href="generalcourses/wip.html" className={'button p-16'}>
                    <button>Keyboard Shortcuts</button>
                </Link>
                <Link href="generalcourses/wip.html" className={'button p-16'}>
                    <button>File Types</button>
                </Link>
                <Link href="generalcourses/wip.html" className={'button p-16'}>
                    <button>Troubleshooting</button>
                </Link>
                <Link href="generalcourses/wip.html" className={'button p-16'}>
                    <button>Internet Security</button>
                </Link>
            </div>
        </Layout>
    )
}

export default GeneralCourse;