import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout(props) {
    return (
        <div className="text-zinc-200">
            <Navbar />
            <main className="container px-4 mx-auto">
                {props.children}    
            </main>
            <Footer />
        </div>
    )
}