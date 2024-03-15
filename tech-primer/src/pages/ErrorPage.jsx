import Layout from '../Layout';

const ErrorPage = () => {
    return (
        <Layout>
            <div className={'flex text-center justify-center'}>
                <div className={'flex flex-col bg-white bg-opacity-25 rounded-xl p-4 gap-5 border-2 border-white border-opacity-75'}>
                    <h1 className={'text-4xl font-semibold'}>Oops!</h1>
                    <p className={'text-xl'}>We cannot seem to find the page you are looking for.</p>
                </div>
            </div>
        </Layout>
    );
}

export default ErrorPage;