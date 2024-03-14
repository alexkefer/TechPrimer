import { Link } from "react-router-dom";
import '../App.css';
import Layout from "../Layout";

const HomePage = () => {
    return (
        <Layout>
        <div className="flex flex-row gap-[2rem] text-center justify-center flex-wrap mb-8">
            <Link to="/howto" className={'button'}>
                <p>How to</p>
            </Link>
            <Link to="/catalogue" className={'button'}>
                <p>Catalogue</p>
            </Link>
            <Link to="/generalcourses" className={'button'}>
                <p>General Course</p>
            </Link>
        </div>
        </Layout>
    )
}

export default HomePage;