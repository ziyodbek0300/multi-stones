import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className={"content min-h-screen flex flex-col justify-between"}>
            <div>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
