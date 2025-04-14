import { useEffect, useState } from "react";
import "../css/SingleAzkar.css"
import Swal from "sweetalert2";

export default function SingleAzkar(props) {
    const [numberOfRepeat , setNumberOfRepeat] = useState(0);
    const {text , benefit , repeat} = props.azkar;
    useEffect(() => {
        setNumberOfRepeat(repeat);
    },[repeat]);
    const handelrepeat = () => {
        if(numberOfRepeat > 0){
            setNumberOfRepeat(numberOfRepeat - 1);
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'لقد استمرت الذكرات يمكنك الإعادة مرة أخري للذكر أو قرأة ذكر آخر.',
                showConfirmButton: false,
                toast: true,
                timer: 1500
              })
        }
    }
    const repeatNumbers = () => {
        if (numberOfRepeat === 0) {
            setNumberOfRepeat(repeat);
        } else if (numberOfRepeat === repeat && numberOfRepeat !== 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'عليك أولاً البدء ف الذكر.',
                showConfirmButton: false,
                toast: true,
                timer: 1500,
                width: '300px',
            });
        } else {
            Swal.fire({
                icon: 'question',
                title: "هل تريد الإعادة مرة أخري؟",
                showDenyButton: true,
                confirmButtonText: 'نعم',
                denyButtonText: `لا`,
            }).then((result) => {
                if (result.isConfirmed) {
                    setNumberOfRepeat(repeat);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'تم الإعادة',
                        showConfirmButton: false,
                        toast: true,
                        timer: 1500
                    });
                }
            });
        }
    };
    
    return (
        <div className="single-zekr text-center my-2">
            <div className="d-flex flex-column">
                <div className={`bg-gray text-dark border rounded-circle single-zekr-number  ${numberOfRepeat === 0 ? "number-azkar-zero number-azkar-border-color" : ""}`}>
                    <h4>{numberOfRepeat}</h4>
                </div>
                <div className={`single-zekr-content border py-3 position-relative ${numberOfRepeat === 0 ? "number-azkar-border-color" : ""}`}>
                    <h3>{text}</h3>
                    <p>{benefit}</p>
                    <div className="text-center position-absolute bottom-0 w-100 mb-2">
                        <button className="btn ms-3 fw-bold custom-button rounded-0 w-25" onClick={handelrepeat}>ذكر</button>
                        <button className="btn fw-bold btn-danger rounded-0 w-25" onClick={repeatNumbers}>إعادة</button>
                    </div>
                </div>
            </div>
        </div>
    )
}