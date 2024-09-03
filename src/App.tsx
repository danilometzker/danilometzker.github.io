import { Swiper, SwiperSlide } from "swiper/react";
import "./App.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import AppPage from "./components/AppPage";
import MainSection from "./components/Sections/MainSection";
import About from "./components/Sections/About";
import { Pagination, Mousewheel } from "swiper/modules";

function App() {
    return (
        <>
            <Swiper
                className="mySwiper"
                direction="vertical"
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                modules={[Pagination, Mousewheel]}
            >
                <SwiperSlide>
                    <AppPage>
                        <MainSection></MainSection>
                    </AppPage>
                </SwiperSlide>
                <SwiperSlide>
                    <AppPage>
                        <About></About>
                    </AppPage>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default App;
