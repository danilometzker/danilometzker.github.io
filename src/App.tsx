import { Swiper, SwiperSlide } from "swiper/react";
import "./App.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import AppPage from "./components/AppPage";
import MainSection from "./components/Sections/MainSection";
import About from "./components/Sections/About";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

function App() {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 768 ? true : false
    );

    const updateWindow = () => {
        setIsMobile(window.innerWidth < 768 ? true : false);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWindow);

        return () => {
            window.removeEventListener("resize", updateWindow);
        };
    }, []);

    return (
        <>
            {isMobile ? (
                <>
                    <MainSection></MainSection>
                    <About></About>
                </>
            ) : (
                <Swiper
                    direction="vertical"
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    noSwipingClass="scrollFree"
                >
                    <SwiperSlide>
                        <AppPage>
                            <MainSection></MainSection>
                        </AppPage>
                    </SwiperSlide>
                    <SwiperSlide className="scrollFree">
                        <AppPage>
                            <About></About>
                        </AppPage>
                    </SwiperSlide>
                </Swiper>
            )}
        </>
    );
}

export default App;
