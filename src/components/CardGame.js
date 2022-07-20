import React from 'react'
import Overview from './Overview';
import Details from './Details';
import Controls from './Controls';

import { useState, useEffect } from 'react';

//JSON Server as backend (install with npm) db.json
export default function CardGame() {
    const [sortMode, setSortMode] = useState('');
   

    const handleAscChange = () => {
        setSortMode('asc');
    };

    const handleDescChange = () => {
        setSortMode('desc');
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();
        //submit Card from Details as JSON to backend 
    }

    //TODOS: 1.implement sorting DONE 2.send Details to db.json 3.display cards (& expand) 4.css
    return(
        <div>
        <Details/>
        <Controls 
            sortMode={sortMode} 
            handleDescChange={handleDescChange} 
            handleAscChange={handleAscChange} 
            handleSubmit={handleSubmit}/>
        <Overview sortMode={sortMode}/>
        </div>
    )
}