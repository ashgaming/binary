import React from 'react'
import BinaryNum from './BinaryNum';

export default function GiveRow() {
    const components = [];
    const count = 20;

    for(let i = 0; i < count; i++) {
        components.push(<BinaryNum key={i} />);
    }

    return <div> { components } </div>

}