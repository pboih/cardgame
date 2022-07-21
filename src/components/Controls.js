import React from 'react';
import RadioButton from './RadioButton';

//TODO check how to pass down props from cardgame
//props: sortmode, handleAscChange, handleDescChange
export default function Controls({sortMode, handleAscChange, handleDescChange, handleSubmit, selected}) {

    return(
        <form onSubmit={handleSubmit}>
           <RadioButton label="SORT ASC" value={sortMode === 'asc'} onChange={handleAscChange} />
           <RadioButton label="SORT DESC" value={sortMode === 'desc'} onChange={handleDescChange} />
           <input type="submit" value={selected} />
        </form>
    )
}