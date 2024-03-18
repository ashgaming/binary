import React, { useState, useEffect } from 'react'
import '../CSS/textglow.css'

export default function BinaryNum() {
    const [number, setNumber] = useState(0);
    const size = Math.floor(Math.random() * 20) + 16;
    const cyanShades = ['#000000','#003333','#004c4c','#006666','#007f7f','#009999','#00b2b2','#00cccc','#00e6e6','#00ffff','#1affff','#33ffff','#4dffff','#66ffff','#80ffff','#99ffff','#b2ffff','#ccffff','#e6ffff',
];
const randomIndex = Math.floor(Math.random() * cyanShades.length);

const clr = cyanShades[randomIndex];
    useEffect(() => {
        const time = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
        const timerId = setTimeout(() => {
            setNumber(prevNumber => (prevNumber === 0 ? 1 : 0));
        }, time);

        return () => {
            clearTimeout(timerId);
        };
    }, [number]);
    return (
        <p className='textglow'>
            {number}
        </p>
    )
}
