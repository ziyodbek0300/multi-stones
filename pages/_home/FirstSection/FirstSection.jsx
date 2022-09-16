import React, {useEffect, useRef, useState} from 'react';
import Button from "../../../components/Button";
import Image from "next/image";
import Black from '../../../public/stones/1.png';
import Blue from '../../../public/stones/2.png';
import Light from '../../../public/stones/3.png';
import Black1 from '../../../public/stones/texture 1.png';
import Blue1 from '../../../public/stones/texture 2.png';
import Light1 from '../../../public/stones/texture 3.png';
import AOS from "aos";
import "aos/dist/aos.css";
import SliderContent from "./SliderContent";

function FirstSection() {
    const [index, setIndex] = useState(0);

    const buttonF = (ind) => {
        AOS.init()
        AOS.refresh()
        setIndex(ind)
    }

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [index]);

    return (<div className={"container md:flex block laptop:flex-row flex-col-reverse gap-10 items-center"}>
        <div className={"laptop:w-[40%] md:w-[90%] laptop:pb-14 pb-0 md:pt-20 pt-9 laptop:mb-28 mb-10"}>
            <div>
                <h1 data-aos="fade-up" data-aos-duration={"600"} data-aos-delay={"600"}
                    className={"text-50-60-600 mb-6"}>Lets make your ideas
                    come to life</h1>
                <p data-aos="fade-up" data-aos-duration={"600"} data-aos-delay={"600"}
                   className={"text-16-22-400 text-gray-650 mb-10"}>Countertop fabrication shop serving NJ, NY, PA
                    and CT.
                    Best prices and highest quality product.</p>
                <div data-aos="fade-up" data-aos-duration={"600"} data-aos-delay={"1200"}>
                    <Button text={"Contact us"} classes={"bg-zinc-950 text-center text-white mb-14"} isF={false}
                            link={"/#contact"}/>
                </div>
                <div className={"laptop:flex hidden gap-4"} data-aos="fade-up" data-aos-duration={"600"}
                     data-aos-delay={"1200"}>
                    <div onClick={() => buttonF(0)}
                         className={index === 0 ? "h-4 w-4 hover:bg-zinc-950 transition border border-zinc-950 bg-zinc-950 bg-zinc-950 active:opacity-60" : "h-4 w-4 hover:bg-zinc-950 transition border border-zinc-950 active:opacity-60"}></div>
                    <div onClick={() => buttonF(1)}
                         className={index === 1 ? "h-4 w-4 hover:bg-zinc-950 transition border border-zinc-950 bg-zinc-950 bg-zinc-950 active:opacity-60" : "h-4 w-4 hover:bg-zinc-950 transition border border-zinc-950 active:opacity-60"}></div>
                    <div onClick={() => buttonF(2)}
                         className={index === 2 ? "h-4 w-4 hover:bg-zinc-950 transition border border-zinc-950 bg-zinc-950 bg-zinc-950 active:opacity-60" : "h-4 w-4 hover:bg-zinc-950 transition border border-zinc-950 active:opacity-60"}></div>
                </div>
            </div>
        </div>
        <div className={"laptop:w-[60%] lg:w-[80%] md:block hidden w-[90%]"}>
            {index === 0 ? (
                <SliderContent index={index} text1={""} text2={""} text3={""} img1={Black1} img={Black}/>
            ) : index === 1 ? (
                <SliderContent index={index} text1={""} text2={""} text3={""} img1={Light1} img={Light}/>
            ) : (
                <SliderContent index={index} text1={""} text2={""} text3={""} img1={Blue1} img={Blue}/>
            )}
            <div className={"laptop:hidden justify-center flex gap-4"} data-aos="fade-up" data-aos-duration={"600"}
                 data-aos-delay={"1200"}>
                <div onClick={() => buttonF(0)}
                     className={"h-4 w-4 hover:bg-zinc-950 transition border border-zinc-950 bg-zinc-950 active:opacity-60"}></div>
                <div onClick={() => buttonF(1)}
                     className={"h-4 w-4 hover:bg-zinc-950 transition border border-zinc-950 active:opacity-60"}></div>
                <div onClick={() => buttonF(2)}
                     className={"h-4 w-4 hover:bg-zinc-950 transition border border-zinc-950 active:opacity-60"}></div>
            </div>
        </div>

    </div>);
}

export default FirstSection;
