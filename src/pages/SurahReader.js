import "../css/SurahReader.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleSurah } from "../RTK/Slices/Quran-slice";
import { NavBarSurahReader } from "./NavBarSurahReader";
import Spinner from "./Spinner";

export default function SurahReader(props) {
    const id = props.id
    const surah = useSelector(state => state.Quran);
    const ayahs = Array.isArray(surah?.data?.ayahs) ? surah.data.ayahs : []
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSingleSurah(id));
    }, [id])
    return (
        <>
            <div className="surah-reader">
                <div className="position-sticky top-0">
                    <NavBarSurahReader surah={surah} />
                </div>
                <div>
                    {
                        ayahs.length > 0 ? (
                            <>
                                <div className="Surah">
                                    <div className="ayah px-3">
                                        {ayahs.map((ayah) => (
                                            <p className="fw-bold fs-5" key={ayah.numberInSurah}>
                                                {ayah.text}
                                                <span className="fw-bold number-ayah">
                                                    ({ayah.numberInSurah})
                                                </span>
                                            </p>
                                        ))}
                                    </div>
                                    <p className="fw-bold fs-5 text-center">( صدق الله العظيم )</p>
                                </div>
                            </>
                        ) : (
                            <div className="text-center">
                                <Spinner />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}