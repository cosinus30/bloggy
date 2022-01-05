import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props) {
    return (
        <div >
            <Navbar />
            <main className="container px-4 mx-auto">
                {props.children}    
            </main>
            <Footer />
        </div>
    )
}