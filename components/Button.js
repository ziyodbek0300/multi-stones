import React from 'react';
import Link from "next/link";

function Button({text, classes, func, isF, link, type}) {
    return (
        <>
            {isF ? <button type={type ? type : "button"} className={`${classes} w-72 text-16-20-600 py-3`}
                           onClick={func}>{text}</button>
                : <Link href={link}>
                    <button className={`${classes} w-72 text-16-20-600 py-3`}>{text}</button>
                </Link>
            }
        </>
    );
}

export default Button;
