import Header from '../pages/header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                { children }
            </main>
        </div>
    )
}

export default Layout;
