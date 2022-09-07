import React, {useEffect} from 'react';
import Button from "../../../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function FifthSection() {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, []);

    return (<div className={"fifthBg py-10"} data-aos="fade-up" data-aos-duration={"600"}>
            <div className={"container md:flex items-center lg:gap-20 md:gap-8"}>
                <div className={"w-full"}>
                    <h2 className={"text-40-48-600 text-white mb-4"}>Contact us for a free quote</h2>
                    <p className={"text-16-22-400 text-white md:pb-0 pb-5"}>
                        Call us or show up for a meeting. We are always trying to provide the best service for you and
                        we aim to answer all questions within 24 hours, on working days. We are always happy to assist
                        you!
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-duration={"700"}>
                    <Button classes={"text-zinc-950 bg-white w-full"} isF={false} link={"/#contact"} text={"Contact us"}/>
                </div>
            </div>
        </div>);
}

export default FifthSection;
