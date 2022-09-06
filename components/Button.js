import React from 'react';
import Link from "next/link";

function Button({text, classes, func, isF, link, type}) {
    return (
        <>
            {isF ? <button type={type ? type : "button"} className={`${classes} md:w-72 sm:w-96 w-full text-16-20-600 py-3`}
                           onClick={func}>{text}</button>
                : <a href={link}>
                    <button className={`${classes} w-72 text-16-20-600 py-3`}>{text}</button>
                </a>
            }
        </>
    );
}

export default Button;
