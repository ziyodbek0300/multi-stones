import React from 'react';
import Image from "next/image";
import Stone1 from '../../../public/images2/2.png';
import Stone2 from '../../../public/images2/5.png';
import Stone3 from '../../../public/images2/1.png';
import Stone4 from '../../../public/images2/3.png';
import Stone6 from '../../../public/images2/4.png';

function FourthSection() {
    return (
        <div className={"container"}>
            <div className={"flex justify-between items-center py-14"}>
                <h2 className={"text-40-48-600 uppercase"}>Projects</h2>
                <p className={"text-16-20-500 uppercase text-gray-650"}>show more</p>
            </div>
            <div className={"grid grid-cols-3 gap-7 pb-28"}>
                <div className={"relative row-start-1 row-end-3 card-projects overflow-hidden"}>
                    <Image src={Stone3} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div className={"relative card-projects overflow-hidden"}>
                    <Image src={Stone1} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div className={"relative card-projects overflow-hidden"}>
                    <Image src={Stone4} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div className={"relative card-projects overflow-hidden"}>
                    <Image src={Stone6} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div className={"relative card-projects overflow-hidden"}>
                    <Image src={Stone2} className={"hover:brightness-50 transition-opacity image"} style={{transition: '.3s ease-in-out'}} alt={"stone-dark"}/>
                    <div className={"absolute pr-text z-40 -top-full h-full w-full flex justify-center items-center p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourthSection;
