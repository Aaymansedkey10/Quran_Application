import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { quranJuzs } from '../data/Data';
import Spinner from "../pages/Spinner";
import { SingleGuz } from "../single_custom_components/SingleGuz";

export default function Guzes() {
    const [juzs, setJuzs] = useState([]);
    useEffect(() => {
        setJuzs(quranJuzs);
    }, [quranJuzs])
    return (
        <>
            <div className="Guzes text-center">
                <Container fluid>
                    <div className="row">
                        <div className="col-12">
                            <h1>أجزاء القرآن الكريم </h1>
                        </div>
                        {
                            juzs && juzs.length > 0 ? (
                                juzs.map((juz, index) => {
                                    return (
                                        <div className="col-12 col-md-4 col-lg-3 mb-3" key={juz.id}>
                                            <SingleGuz juzQuran={juz} />
                                        </div>
                                    )
                                })
                            ) : (
                                <div className="col-12 text-center">
                                    <Spinner />
                                </div>
                            )
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}