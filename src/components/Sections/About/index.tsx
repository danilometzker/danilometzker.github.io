import { useSwiperSlide } from "swiper/react";
import "./style.scss";

const About = () => {
    const swiperSlide = useSwiperSlide();

    return (
        <div
            className={
                "sectionAbout " + (swiperSlide.isActive && "activeSection")
            }
        ></div>
    );
};

export default About;
