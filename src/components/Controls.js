import React from 'react';
import { useState, useEffect } from 'react';
import RadioButton from './RadioButton';

export default function Controls() {
    const [asc, setAsc] = useState(false);
    const [desc, setDesc] = useState(false);

    const handleAscChange = () => {
        setAsc(!asc);
    };

    const handleDescChange = () => {
        setDesc(!desc);
    };
    
    return(
        <div>
           <RadioButton label="SORT ASC" value={asc} onChange={handleAscChange} />
           <RadioButton label="SORT DESC" value={desc} onChange={handleDescChange} />
        </div>
    )
}