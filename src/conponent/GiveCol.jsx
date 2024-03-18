import React from 'react'
import GiveRow from './GiveRow';

export default function GiveCol() {
        const components = [];
        const count = 80;
    
        for (let i = 0; i < count; i++) {
            components.push(<GiveRow style={
                {
                    display:'flex',
                    margin:'0px'
                }
            } key={i} />);
        }
    
        return <div style={
            {
                display:'flex'
            }
        }>{components}</div>;
    
}