import { Link } from "react-router-dom";
import '../App.css';
import Layout from "../Layout";
import { FaFileAudio } from "react-icons/fa6";
import { IoColorFilterSharp } from "react-icons/io5";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { FaBook } from "react-icons/fa6";
import { IoIosBookmarks } from "react-icons/io";



const HomePage = () => {
    const tempPercentComplete = 0;
    return (
        <Layout>
            <div className="flex flex-row gap-40 text-center justify-center flex-wrap mb-8">
                <div className={"flex flex-col justify-center"}>
                    <Link to={"/settings#tts"} className={'p-2 rounded-xl hover:bg-white hover:bg-opacity-25 hover:duration-200'}>
                        <FaFileAudio size={90}/>
                    </Link>
                </div>
                <Link to="/howto"
                      className={'flex flex-col gap-2 bg-windows-bg bg-white bg-blend-multiply bg-cover py-10 px-2 pr-32 my-5 text-left rounded-2xl border-2 border-black hover:bg-gray-500 hover:text-amber-50 duration-300'}>
                    <p className={'text-3xl font-semibold'}>General Course</p>
                    <p className={'text-xl'}>You have selected: Windows </p>
                    <p className={'text-lg'}>0/84 ({tempPercentComplete}%) Modules Completed</p>
                    <p className={'text-md'}>Next Module: System Updates</p>
                    <p className={'pl-5 text-md'}>~1 hour Completion Time</p>
                </Link>
                <div className={"flex flex-col justify-center"}>
                    <Link to={'/settings#color'} className={'p-2 rounded-xl hover:bg-white hover:bg-opacity-25 hover:duration-200'}>
                        <IoColorFilterSharp size={90}/>
                    </Link>
                </div>
            </div>
        <div className="flex flex-row justify-evenly text-center flex-wrap mb-8">
            <Link to="/catalogue" className={'flex gap-2 button p-5'}>
                <FaBook size={30}/>
                <p className={'mt-1'}>Catalogue</p>
            </Link>
            <Link to="/howto" className={'flex gap-2 button p-5'}>
                <HiQuestionMarkCircle size={30}/>
                <p className={'mt-1'}>How to</p>
            </Link>
            <Link to="/generalcourses" className={'flex gap-2 button p-5'}>
                <IoIosBookmarks size={30}/>
                <p className={'mt-1'}>Enrolled Courses</p>
            </Link>
        </div>
        </Layout>
    )
}

export default HomePage;