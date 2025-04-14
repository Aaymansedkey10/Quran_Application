import HomeCarousel from '../pages/HomeCarousel';
import GoodDeeds from '../pages/GoodDeeds';
import PillarsOfIslam from "../pages/PillarsOfIslam";
import PillarsOfFaith from "../pages/PillarsOfFaith";
export const Home = () => {
    return (
        <>
            <div className="Home-container">
                <HomeCarousel />
                <PillarsOfIslam />
                <PillarsOfFaith />
                <GoodDeeds />
            </div>
        </>
    )
}