import Header from './components/Header';

function Layout({ children }) {
    return (
        <body>
            <div className={'w-full min-h-screen flex-col justify-center items-center bg-gradient-to-br from-emerald-300 to-teal-700'}>
                <Header />
                <main className={'container mx-auto'}>
                    {children}
                </main>
            </div>
        </body>
    );
}

export default Layout;