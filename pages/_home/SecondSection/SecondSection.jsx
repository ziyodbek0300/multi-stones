import React from 'react';
import Image from "next/image";
import Stone1 from '../../../public/stones/Rectangle.png';
import Stone2 from '../../../public/stones/Rectangle 8-1.png';
import Stone3 from '../../../public/stones/Rectangle 8-2.png';
import Stone4 from '../../../public/stones/Rectangle 8.png';
import Stone5 from '../../../public/stones/Rectangle 88.png';
import Stone6 from '../../../public/stones/Rectangle 888.png';

function SecondSection() {
    return (
        <div className={"container"}>
            <div className={"flex justify-between items-center py-14"}>
                <h2 className={"text-40-48-600 uppercase"}>Products</h2>
                <p className={"text-16-20-500 uppercase text-gray-650"}>show more</p>
            </div>
            <div className={"grid grid-cols-3 gap-7 pb-28"}>
                <div className={"relative pb-0 mb-0"}>
                    <div className={"bg-tanerofka absolute h-1/2 bottom-[6px] w-full z-40"}></div>
                    <Image src={Stone3} className={""} alt={"stone-dark"}/>
                    <div className={"absolute z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div className={"relative"}>
                    <div className={"bg-tanerofka absolute h-1/2 bottom-[6px] w-full z-40"}></div>
                    <Image src={Stone1} className={""} alt={"stone-dark"}/>
                    <div className={"absolute z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div className={"relative"}>
                    <div className={"bg-tanerofka absolute h-1/2 bottom-[6px] w-full z-40"}></div>
                    <Image src={Stone4} className={""} alt={"stone-dark"}/>
                    <div className={"absolute z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div className={"relative"}>
                    <div className={"bg-tanerofka absolute h-1/2 bottom-[6px] w-full z-40"}></div>
                    <Image src={Stone6} className={""} alt={"stone-dark"}/>
                    <div className={"absolute z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div className={"relative"}>
                    <div className={"bg-tanerofka absolute h-1/2 bottom-[6px] w-full z-40"}></div>
                    <Image src={Stone2} className={""} alt={"stone-dark"}/>
                    <div className={"absolute z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
                <div className={"relative"}>
                    <div className={"bg-tanerofka absolute h-1/2 bottom-[6px] w-full z-40"}></div>
                    <Image src={Stone5} className={""} alt={"stone-dark"}/>
                    <div className={"absolute z-40 bottom-0 p-6"}>
                        <h3 className={"text-white text-24-30-600 mb-2"}>Some Text</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
