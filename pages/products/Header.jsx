import React from 'react';
import Button from "../../components/Button";

function Header(props) {
    return (<div>
        <h1 className={"text-50-60-600 text-white mb-5"}>Our products</h1>
        <p className={"text-16-22-400 mb-10"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas congue sed id pretium duis libero. Sed
            orci non id.
        </p>
        <Button text={"Select color"} classes={"bg-white text-zinc-950"} isF={false} link={"/#products"}
                type={"button"}/>
    </div>);
}

export default Header;
