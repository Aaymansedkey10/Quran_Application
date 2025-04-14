import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { pillarsOfIslam } from "../data/Data";
import IslamCard from "../single_custom_components/IslamCard";
import Spinner from "./Spinner";

export default function PillarsOfIslam() {
    const [Pillars, setIPillars] = useState([]);
    useEffect(() => {
        setIPillars(pillarsOfIslam);
    }, [pillarsOfIslam])
    return (
        <div className="pillars-of-islam text-center my-5">
            <Container fluid>
                <div className="row">
                    <div className="col-12">
                        <h1 className="fw-bold">أركان الاسلام</h1>
                    </div>
                    {
                        Pillars && Pillars.length > 0 ? (
                            Pillars.map((pillar, index) => (
                                <div className="col-12 col-md-6 col-lg-4" key={index}>
                                    <IslamCard data={pillar} />
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
        </div>
    )
}