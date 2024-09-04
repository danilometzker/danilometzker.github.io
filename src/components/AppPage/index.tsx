import { useSwiper } from "swiper/react";
import "./style.scss";
import { useState } from "react";

const AppPage = ({ children }: any) => {
    const swiper = useSwiper();
    const [canPrev, setCanPrev] = useState(true);
    const [touches, setTouches] = useState<{
        x: number | undefined;
        y: number | undefined;
    }>({
        x: undefined,
        y: undefined,
    });

    const handleInsideScroll = (event: React.UIEvent<HTMLElement, UIEvent>) => {
        if (event.currentTarget.scrollTop == 0) {
            setCanPrev(true);
        } else {
            setCanPrev(false);
        }

        // if (
        //     event.currentTarget.scrollHeight -
        //         (event.currentTarget.scrollTop +
        //             event.currentTarget.clientHeight) ==
        //     0
        // ) {
        //     setCanNext(true);
        // } else {
        //     setCanNext(false);
        // }
    };

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        if (canPrev && event.deltaY < 0) {
            swiper.slidePrev();
        }
        if (
            event.deltaY > 0 &&
            event.currentTarget.scrollHeight -
                (event.currentTarget.scrollTop +
                    event.currentTarget.clientHeight) ==
                0
        ) {
            swiper.slideNext();
        }
    };

    const handleTouch = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touches.y) {
            if (touches.y < event.changedTouches[0].screenY) {
                if (event.currentTarget.scrollTop == 0) {
                    swiper.slidePrev();
                    console.log("tried do swipe prev", event.currentTarget);
                }
            } else {
                if (
                    event.currentTarget.scrollHeight -
                        (event.currentTarget.scrollTop +
                            event.currentTarget.clientHeight) ==
                    0
                ) {
                    console.log("tried do swipe next", event.currentTarget);
                    swiper.slideNext();
                }
            }
        }
        setTouches({
            x: event.changedTouches[0].screenX,
            y: event.changedTouches[0].screenY,
        });
    };

    return (
        <div
            className="appPage"
            onScroll={handleInsideScroll}
            onWheel={handleWheel}
            onTouchMove={handleTouch}
        >
            {children}
        </div>
    );
};

export default AppPage;
