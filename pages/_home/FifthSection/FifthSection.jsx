import React from 'react';
import Button from "../../../components/Button";

function FifthSection() {
    return (
        <div className={"fifthBg py-10"}>
            <div className={"container flex items-center lg:gap-20 gap-8"}>
                <div className={"w-full"}>
                    <h2 className={"text-40-48-600 text-white mb-4"}>Contact us for a free quote</h2>
                    <p className={"text-16-22-400 text-white"}>
                        Call us or show up for a meeting. We are always trying to provide the best service for you and
                        we aim to answer all questions within 24 hours, on working days. We are always happy to assist
                        you!
                    </p>
                </div>
            <div>
                <Button classes={"text-zinc-950 bg-white"} isF={false} link={"/#contact"} text={"Contact us"} />
            </div>
            </div>
        </div>
    );
}

export default FifthSection;
