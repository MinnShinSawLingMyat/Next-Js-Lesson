"use client"

import { useState, useMemo } from "react";

export default function Memo() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => slowFunction(number), [number]);

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    }

    return (
        <>
            <input 
              type="number" 
              value={number} 
              onChange={e => setNumber(parseInt(e.target.value))} 
              className="border p-1" 
            />

            <button
              onClick={() => setDark(prevDark => !prevDark)}
              className="border p-1"
            >Change Theme</button>

            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}

function slowFunction(num: number): number {
    console.log('render again');
    
    for (let index = 0; index <= 100000000; index++) {};
    return num * 2;
}