import "../css/IslamCard.css";
export default function IslamCard(props) {
    const {name , description , evidence} = props.data;
    return (
        <div className="single-good-deeds text-center mb-3">
            <div className="d-flex flex-column">
                <div className="overflow-hidden w-100 mb-2 rounded good-deeds-name">
                    <h3 className="fw-bold">{name}</h3>
                </div>
                <div className="card-body bg-light text-dark rounded-2 py-2 px-1 border custom-card">
                    <p className="fw-bold m-0 p-0">{description}</p>
                    <p className="fw-bold m-0 p-0">{evidence}</p>
                </div>
            </div>
        </div>
    )
}