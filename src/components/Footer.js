import { useLocation } from "react-router";

export const Footer = () => {
    const location = useLocation();
    // console.log(location)
    return (
        <>
            <footer className={`text-center border-top border-2 py-3 footer-container ${location.pathname === "/azkar" ? "position-fixed bottom-0 w-100" : ""}`} style={{backgroundColor: "#0b3d2e" , color: "#fff"}}>
                    <div className="text-center">
                        جميع الحقوق محفوظة لدي :
                        <a className="mx-2 text-decoration-none text-white" href="https://www.linkedin.com/in/aymansedkey10">أيمن صدقي</a>
                    </div>
            </footer>
        </>
    )
}