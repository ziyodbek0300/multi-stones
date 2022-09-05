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
            r.current.setAttribute("data-aos", "flip-left");
            r.current.setAttribute("data-aos-duration", "1000");
            r.current.setAttribute("data-aos-delay", "1200");
            r.current.classList.add("aos-animate");
            r.current.classList.add("aos-init");
        }, 5000)
    }, [index, img1, img]);

    return (
        <div className={"flex absolute justify-end right-0"} style={{top: '5.2rem'}}>
            <div className={"relative 2xl:w-[95%] xl:[85%] lg:w-[80%]"}>
                <div data-aos="fade-up" data-aos-duration={"600"} data-aos-delay={"1200"}
                     className={"absolute 2xl:bottom-20 xl:bottom-2 lg:bottom-0 left-[] items-center z-50 -left-32"}>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className={"cursor-pointer bg-black-custom p-6 gap-5 flex"}>
                            <div>
                                <Image src={img1} alt={"black"}
                                       className={"rounded"} width={100} height={100}/>
                            </div>
                            <div className={"text-white"}>
                                <p className={"18-20-500 mb-2"}>Negresco Granite</p>
                                <p className={"16-20-400 mb-1"}>Color: <span className={"opacity-70"}>Black</span>
                                </p>
                                <p className={"16-20-400"}>Style: <span className={"opacity-70"}>Plain</span></p>
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div ref={r}>
                    <Image src={img} alt={"black"} className={""}/>
                </div>
            </div>
        </div>
    );
}

export default SliderContent;
