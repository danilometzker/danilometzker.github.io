import { useSwiper } from "swiper/react";
import "./style.scss";
import { useState } from "react";

const AppPage = ({ children }: any) => {
    const swiper = useSwiper();
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);

    const handleInsideScroll = (event: React.UIEvent<HTMLElement, UIEvent>) => {
        if (event.currentTarget.scrollTop == 0) {
            setCanPrev(true);
        } else {
            setCanPrev(false);
        }

        if (
            event.currentTarget.scrollHeight -
                (event.currentTarget.scrollTop +
                    event.currentTarget.clientHeight) ==
            0
        ) {
            setCanNext(true);
        } else {
            setCanNext(false);
        }
    };

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        if (canPrev && event.deltaY < 0) {
            swiper.slidePrev();
            console.log("trying top");
        }
        if (canNext && event.deltaY > 0) {
            swiper.slideNext();
        }
    };

    return (
        <div
            className="appPage"
            onScroll={handleInsideScroll}
            onWheel={handleWheel}
        >
            {children}
        </div>
    );
};

export default AppPage;
