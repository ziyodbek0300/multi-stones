import React, {useRef} from 'react';
import Button from "../../../components/Button";
import Image from "next/image";
import Black from '../../../public/black-s.png';
import Blue from '../../../public/blue-s.png';
import Light from '../../../public/light-s.png';
import Tilt from 'react-parallax-tilt';

function FirstSection() {
    const eRef = useRef();
    const buttonF = () => {
        console.log("as")
    }

    // const handleMove = (e) => {
    //     console.log(e.target.scrollHeight, e.target.scrollWidth)
    //     eRef.current.style.transform = `perspective(3000px)`;
    //     eRef.current.style.transform = `rotateY(-${e.pageX / 50}deg)`
    // }

    return (<div className={"container flex gap-10 items-center"}>
        <div className={"w-[40%] pb-14 pt-20 mb-28"}>
            <div>
                <h1 className={"text-50-60-600 mb-6"}>Lets make your ideas come to life</h1>
                <p className={"text-16-22-400 text-gray-650 mb-10"}>Countertop fabrication shop serving NJ, NY, PA
                    and CT.
                    Best prices and highest quality product.</p>
                <Button text={"Contact us"} classes={"bg-zinc-950 text-center text-white mb-14"} isF={true}
                        func={buttonF}/>
                <div className={"flex gap-4"}>
                    <div className={"h-4 w-4 border border-zinc-950 bg-zinc-950 active:opacity-60"}></div>
                    <div className={"h-4 w-4 border border-zinc-950 active:opacity-60"}></div>
                    <div className={"h-4 w-4 border border-zinc-950 active:opacity-60"}></div>
                </div>
            </div>
        </div>
        <div className={"w-[60%]"}>
            <div className={"flex absolute justify-end right-0"} style={{top: '5.2rem'}}>
                <div className={"relative w-[95%]"}>
                    <div className={"absolute bottom-20 items-center z-50 -left-32"}>
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                            <div className={"cursor-pointer bg-black-custom p-6 gap-5 flex"}>
                                <Image src={Black} alt={"black"} className={"rounded"} width={100} height={100}/>
                                <div className={"text-white"}>
                                    <p className={"18-20-500 mb-2"}>Negresco Granite</p>
                                    <p className={"16-20-400 mb-1"}>Color: <span className={"opacity-70"}>Black</span></p>
                                    <p className={"16-20-400"}>Style: <span className={"opacity-70"}>Plain</span></p>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <Image src={Black} alt={"black"} className={""}/>
                </div>
            </div>
            {/*    <div className={"flex absolute justify-end right-0"} style={{top: '5.2rem'}}>*/}
            {/*        <div className={"relative w-[85%]"}>*/}
            {/*            <div className={"absolute flex bottom-20 items-center z-50 bg-black-custom p-6 gap-5 -left-32"}>*/}
            {/*                <Image src={Light} alt={"light"} className={"rounded"} width={100} height={100}/>*/}
            {/*                <div className={"text-white"}>*/}
            {/*                    <p className={"18-20-500 mb-2"}>Negresco Granite</p>*/}
            {/*                    <p className={"16-20-400 mb-1"}>Color: <span className={"opacity-70"}>Light</span></p>*/}
            {/*                    <p className={"16-20-400"}>Style: <span className={"opacity-70"}>Plain</span></p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <Image src={Light} alt={"light"} className={""}/>*/}
            {/*        </div>*/}
            {/*    </div><div className={"flex absolute justify-end right-0"} style={{top: '5.2rem'}}>*/}
            {/*    <div className={"relative w-[85%]"}>*/}
            {/*        <div className={"absolute flex bottom-20 items-center z-50 bg-black-custom p-6 gap-5 -left-32"}>*/}
            {/*            <Image src={Blue} alt={"black"} className={"rounded"} width={100} height={100}/>*/}
            {/*            <div className={"text-white"}>*/}
            {/*                <p className={"18-20-500 mb-2"}>Negresco Granite</p>*/}
            {/*                <p className={"16-20-400 mb-1"}>Color: <span className={"opacity-70"}>Blue</span></p>*/}
            {/*                <p className={"16-20-400"}>Style: <span className={"opacity-70"}>Plain</span></p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <Image src={Blue} alt={"black"} className={""}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    </div>);
}

export default FirstSection;
