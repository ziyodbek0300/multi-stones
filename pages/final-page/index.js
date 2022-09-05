import React from 'react';
import Image from "next/image";
import Mark from '../../public/s.svg';
import Button from "../../components/Button";

function FinalPage() {
    return (
        <div className={"h-[80vh] flex justify-center items-center"}>
            <div className={"text-center"}>
                <div className={"mb-12"}>
                    <Image src={Mark} alt={'checked'} />
                </div>
                <h1 className={"text-center uppercase text-40-48-600 mb-5"}>thank you!</h1>
                <p className={"lg:w-4/5 sm:3/5 w-full mx-auto text-gray-650 mb-12"}>Thank you very much for filling out our form. Your mail is waiting for you in your inbox!</p>
                <Button text={"Go to homepage"} link={"/"} isF={false} classes={"text-white bg-zinc-950 text-center"} />
            </div>
        </div>
    );
}

export default FinalPage;
