import React from 'react';
import Image from "next/image";
import Image1 from "../../../public/partners/image 2-1.svg";
import Image2 from "../../../public/partners/image 3.svg";
import Image3 from "../../../public/partners/image 4.svg";
import Image4 from "../../../public/partners/image 5-1.svg";
import Image5 from "../../../public/partners/image 5.svg";
import Image6 from "../../../public/partners/image 6.svg";
import Image7 from "../../../public/partners/image 8-1.svg";
import Image8 from "../../../public/partners/image 8-2.svg";

function SixthSection() {
    return (
        <div className={"lg:py-28 py-12"}>
            <h2 className={"text-40-48-600 uppercase text-center mb-12"}>Our partners</h2>
            <div className={"grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container gap-8"}>
                <Image data-aos="fade-up" data-aos-duration={"600"} src={Image1} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image data-aos="fade-up" data-aos-duration={"700"} src={Image2} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image data-aos="fade-up" data-aos-duration={"800"} src={Image3} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image data-aos="fade-up" data-aos-duration={"900"} src={Image4} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image data-aos="fade-up" data-aos-duration={"600"} src={Image5} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image data-aos="fade-up" data-aos-duration={"700"} src={Image6} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image data-aos="fade-up" data-aos-duration={"800"} src={Image7} alt={"partner1"} className={"lg:w-full w-auto"} />
                <Image data-aos="fade-up" data-aos-duration={"900"} src={Image8} alt={"partner1"} className={"lg:w-full w-auto"} />
            </div>
        </div>
    );
}

export default SixthSection;
