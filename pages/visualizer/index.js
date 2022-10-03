import React from 'react';
import Image from "next/image";
import Mark from '../../public/s.svg';
import Button from "../../components/Button";


function Visualizer() {
    return (
        <>
            <div className={"text-center"}>
                <body>
                    <iframe 
                        src="https://www.msisurfaces.com/virtual-kitchen-designer/?menu=n"   id="i" name="i"  
                        frameBorder="0"   scrolling="no"  height="1025px" width="100%"></iframe>
                </body>
                <br/>
            </div>
        </>
    );
}

export default Visualizer;
