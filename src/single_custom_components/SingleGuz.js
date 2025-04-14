import { Card } from "react-bootstrap";
import Spinner from "../pages/Spinner";
export const SingleGuz = (props) => {
    const juzQuran = props?.juzQuran
    if (!props.juzQuran) {
        return <Spinner />
    }    
    return (
        <>
            <div className="single-guz">
                <Card className="custom-card">
                    <Card.Body>
                        {/* <Card.Title className="fw-bold fs-5">الجزء رقم : {juzQuran?.id}</Card.Title> */}
                        <Card.Title className="fw-bold fs-5 fw-bold">{juzQuran?.juzName}</Card.Title>
                        <Card.Subtitle className="mb-2">يبدأ بآية رقم : <span className="fw-bold">{juzQuran?.startAyah}</span> من سورة : <span className="fw-bold">{juzQuran?.startSurah}</span></Card.Subtitle>
                        <Card.Subtitle className="mb-2"> ينتهي بآية رقم : <span className="fw-bold">{juzQuran?.endAyah} </span>من سورة : <span className="fw-bold">{juzQuran?.endSurah}</span></Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}