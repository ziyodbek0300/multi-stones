import React from 'react';
import {useRouter} from "next/router";

function ProductDetail() {
    const {id} = useRouter()
    console.log(id);

    return (
        <div>
            <p>Hello</p>
        </div>
    )
}

export default ProductDetail;
