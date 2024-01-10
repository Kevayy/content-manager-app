import Navbar from "./Navbar";
import ActiveResource from "./ActiveResource";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <ActiveResource />
            { children }
        </>
    )
}