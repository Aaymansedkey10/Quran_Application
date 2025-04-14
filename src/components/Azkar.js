import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { IslamicAzkar } from "../data/Data";
import SingleAzkar from "../single_custom_components/SingleAzkar";
import Spinner from "../pages/Spinner";


export default function Azkar() {
    const [islamAzkar, setIslamAzakr] = useState([]);
    useEffect(() => {
        setIslamAzakr(IslamicAzkar.genaral);
    }, [IslamicAzkar]);
    return (
        <>
            <div className="text-center">
                <Container fluid>
                    <div className="row">
                       {
                            islamAzkar && islamAzkar.length > 0 ? (
                                islamAzkar.map((azkar, index) => (
                                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                                        <SingleAzkar key={index} azkar={azkar} />
                                    </div>
                                ))
                            ) : (
                                <Spinner />
                            )
                       }
                    </div>
                </Container>
            </div>
        </>
    )
}