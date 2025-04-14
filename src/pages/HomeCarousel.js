import "../css/HomeCarsouel.css";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slideImageOne from "../assets/images/slide-image-one.jpg";
import slideImageTwo from "../assets/images/slide-image-two.jpg";
import slideImageThree from "../assets/images/slide-image-three.jpg";
import slideImageFour from "../assets/images/slide-image-four.jpg";
import 'swiper/css';
import 'swiper/css/pagination';
import Spinner from "./Spinner";

export default function HomeCarousel() {
    const [slideImage, setSlideImage] = useState([]);
    useEffect(() => {
        setSlideImage([slideImageOne, slideImageTwo, slideImageThree, slideImageFour]);
    }, []);
    return (
        <>
            <div className="HomeCarousel-container">
                <Swiper
                    navigation={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    className="mySwiper"
                    grabCursor={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: true
                    }}
                    effect={'fade'}
                >
                    {
                        slideImage && slideImage.length > 0 ? (
                            slideImage.map((image, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={image} alt="carousel-image" className="img-fluid" />
                                    </SwiperSlide>
                                )
                            })
                        ) : (
                            <SwiperSlide>
                                <Spinner />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </>
    );
}