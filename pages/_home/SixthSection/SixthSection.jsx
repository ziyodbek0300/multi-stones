import React from 'react';
import Image from "next/image";
import Image1 from "../../../public/images2/image 6.png";
import Image2 from "../../../public/images2/image 13.png";
import Image3 from "../../../public/images2/image 3.png";
import Image4 from "../../../public/images2/image 4.png";
import Image5 from "../../../public/images2/image 8.png";
import Image6 from "../../../public/images2/image 12.png";
import Image7 from "../../../public/images2/image 5.png";
import Image8 from "../../../public/images2/image 2.png";

function SixthSection() {
    return (
        <div className={"py-28"}>
            <h2 className={"text-40-48-600 uppercase text-center mb-12"}>Our partners</h2>
            <div className={"grid grid-cols-4 container gap-8"}>
                <Image src={Image1} alt={"partner1"} className={"w-full"} />
                <Image src={Image2} alt={"partner1"} className={"w-full"} />
                <Image src={Image3} alt={"partner1"} className={"w-full"} />
                <Image src={Image4} alt={"partner1"} className={"w-full"} />
                <Image src={Image5} alt={"partner1"} className={"w-full"} />
                <Image src={Image6} alt={"partner1"} className={"w-full"} />
                <Image src={Image7} alt={"partner1"} className={"w-full"} />
                <Image src={Image8} alt={"partner1"} className={"w-full"} />
            </div>
        </div>
    );
}

export default SixthSection;
