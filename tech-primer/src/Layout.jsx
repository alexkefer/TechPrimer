import Header from './components/Header';
import Footer from './components/Footer';

function Layout({ children }) {
    return (
        <body className={'flex flex-col min-h-screen bg-gradient-to-br from-emerald-300 to-teal-700'}>
            <div className={'min-w-full items-center flex-grow'}>
                <Header />
                <main className={'container mx-auto'}>
                    {children}
                </main>
            </div>
            <div className={'min-w-full mt-auto'}>
                <Footer/>
            </div>
        </body>
    );
}

export default Layout;