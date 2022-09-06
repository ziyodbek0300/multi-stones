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
        <div className={"lg:py-28 py-12"}>
            <h2 className={"text-40-48-600 uppercase text-center mb-12"}>Our partners</h2>
            <div className={"grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container gap-8"}>
                <Image src={Image1} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image src={Image2} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image src={Image3} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image src={Image4} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image src={Image5} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image src={Image6} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image src={Image7} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image src={Image8} alt={"partner1"} className={"lg:w-full w-auto"} />
            </div>
        </div>
    );
}

export default SixthSection;
