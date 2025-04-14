import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="border-bottom border-2 border-light navbar-container" sticky="top" style={{ backgroundColor: "#0b3d2e" , top: "-2px" }}>
                <Container fluid>
                    <Link className="navbar-brand text-light" to="/">إسلام ويب</Link>
                    <Navbar.Toggle className="border border-light" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Link className="nav-link text-light" to="/">الرئيسية</Link>
                            <Link className="nav-link text-light" to="/fahras">الفهرس</Link>
                            <Link className="nav-link text-light" to="/guzes">الأجزاء</Link>
                            <Link className="nav-link text-light" to="/azkar">الاذكار</Link>
                        </Nav>
                        <a href="https://www.linkedin.com/in/aymansedkey10" target="_blank" rel="noopener noreferrer" className="btn bg-white rounded-pill ms-3 px-4 fw-bold shadow">تواصل معنا </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
