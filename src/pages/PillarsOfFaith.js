import { useEffect } from "react";
import { useState } from "react";
import { pillarsOfFaith } from "../data/Data";
import { Container } from "react-bootstrap";
import IslamCard from "../single_custom_components/IslamCard";
import Spinner from "./Spinner";

export default function PillarsOfFaith() {
    const [PillarsOfFaith, setIPillarsOfFaith] = useState([]);
    useEffect(() => {
        setIPillarsOfFaith(pillarsOfFaith);
    })
    return (
        <Container fluid>
            <div className="row text-center">
                <div className="col-12">
                    <h1 className="fw-bold">أركان الإيمان</h1>
                </div>
                {
                    PillarsOfFaith && PillarsOfFaith.length > 0 ? (
                        PillarsOfFaith.map((pillarOfFaith, index) => (
                            <div className="col-12 col-md-6 col-lg-4" key={index}>
                                <IslamCard data={pillarOfFaith} />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <Spinner />
                        </div>
                    )
                }
            </div>
        </Container>
    )
}