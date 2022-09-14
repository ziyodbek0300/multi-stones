import React from 'react';
import Button from "../../components/Button";

function Header() {
    return (<div className={"h-700 flex items-center"}>
        <div className={"container"}>
            <div className={"flex"}>
                <div className={"w-full"}>
                    <h1 className={"text-50-60-600 text-white mb-5"}>Our products</h1>
                    <p className={"text-16-22-400 mb-10 text-white text-16-22-400"}>
                    Our years of experience combined with quality partnerships we established with suppliers will ensure you get satisfied with the product and service you receive.
                    </p>
                    <Button text={"Select color"} classes={"bg-white text-zinc-950"} isF={false} link={"products/#products"}
                            type={"button"}/>
                </div>
                <div className={"lg:w-full w-0"}></div>
            </div>
        </div>
    </div>);
}

export default Header;
