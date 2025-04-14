import { Container } from "react-bootstrap";

export const NavBarSurahReader = (props)=>{
    const surah = props.surah.data;   
    return(
        <>
            <div className="navbar-surah-reader" style={{ backgroundColor: "#0b3d2e" }}>
                <Container fluid>
                    <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <span className="fw-bold fs-3 text-white">{surah.name} | { surah.englishName}</span>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}