import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { islamicgoodDeeds } from "../data/Data";
import IslamCard from "../single_custom_components/IslamCard";
import Spinner from '../pages/Spinner';

export default function GoodDeeds() {
    const [goodDeeds, setGoodDeeds] = useState([]);
    useEffect(() => {
        setGoodDeeds(islamicgoodDeeds);
    }, [])
    return (
        <div className="good-deeds">
            <Container fluid>
                <div className="row my-5">
                    <div className="col-12">
                        <h1 className="text-center fw-bold title">فضائل الاعمال </h1>
                    </div>
                    {
                        goodDeeds && goodDeeds.length > 0 ? (
                            goodDeeds.map((goodDeed, index) => (
                                <div className="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4" key={index}>
                                    <IslamCard data={goodDeed} />
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