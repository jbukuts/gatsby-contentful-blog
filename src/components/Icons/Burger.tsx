import React, { useState } from 'react';

const Burger = ({className, open=false}: any) => {
    const openLines = ['m0 0l100.0 0l0 23.84252l-100.0 0z', 'm0 76.55118l100.0 0l0 23.842522l-100.0 0z']
    const closeLines = ['m23.074265 6.4119077l70.708664 70.70866l-16.850395 16.850395l-70.708664 -70.708664z', 'm6.2146325 77.11816l70.708664 -70.708664l16.850395 16.850393l-70.708664 70.70866z']

    const displayStates = [
        openLines,
        closeLines
    ] as Array<Array<string>>;

    return <svg 
        className={className || undefined}
        version="1.1" 
        viewBox="0.0 0.0 100.0 100.0" 
        fill="none" 
        stroke="none" 
        stroke-linecap="square" 
        stroke-miterlimit="10" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        xmlns="http://www.w3.org/2000/svg">
            <clipPath id="p.0">
                <path d="m0 0l100.0 0l0 100.0l-100.0 0l0 -100.0z" clip-rule="nonzero"/>
            </clipPath>
            <g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l100.0 0l0 100.0l-100.0 0z" fill-rule="evenodd"/>
                {!open && <path fill="#000000" d="m0 38.27559l100.0 0l0 23.842522l-100.0 0z" fill-rule="evenodd"/>}
                {displayStates[+open].map(d => <path fill="#000000" d={d} fill-rule="evenodd"/>)}
            </g>
        </svg>
}

export default Burger;