import React, {useEffect, useRef} from 'react';
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function SliderContent({index, img1, img}) {
    const r = useRef();

    useEffect(() => {
        AOS.init()
        AOS.refresh()
        r.current.classList.remove("aos-animate");
        r.current.classList.remove("aos-init");
        setTimeout(() => {
            AOS.init()
            AOS.refresh()
            // r.current.setAttribute("data-aos", "flip-left");
            // r.current.setAttribute("data-aos-duration", "1000");
            // r.current.setAttribute("data-aos-delay", "1200");
            // r.current.classList.add("aos-animate");
            // r.current.classList.add("aos-init");
        }, 5000)
    }, [index, img1, img]);

    return (
        <div className={"flex laptop:flex-row flex-col-reverse laptop:absolute static justify-end right-0"} style={{top: '6rem'}}>
            <div className={"relative text-center sada lg:w-[100%] laptop:w-[70%]"}>
                <div data-aos="fade-up" data-aos-duration={"600"} data-aos-delay={"1200"}
                     className={"absolute bottom-14 items-center z-40 xl:-left-32 -left-12"}>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className={"cursor-pointer bg-black-custom items-center 2xl:p-6 xl:p-4 md:p-2 gap-5 flex"}>
                            <div className={"flex justify-center items-center"}>
                                <Image src={img1} alt={"black"}
                                       className={"rounded md:w-[60px] md:h-[60px] xl:w-[100px] xl:h-[100px]"}/>
                            </div>
                            <div className={"text-white"}>
                                <p className={"18-20-500 mb-1"}>Negresco Granite</p>
                                <p className={"16-20-400 mb-1"}>Color: <span className={"opacity-70"}>Black</span>
                                </p>
                                <p className={"16-20-400"}>Style: <span className={"opacity-70"}>Plain</span></p>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div ref={r} className={""}>
                    <Image src={img} alt={"black"} className={"ssss"}/>
                </div>
            </div>
        </div>
    );
}

export default SliderContent;
