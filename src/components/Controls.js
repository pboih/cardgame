import React from 'react';
import RadioButton from './RadioButton';


export default function Controls({sortMode, handleAscChange, handleDescChange, handleSubmit,}) {

    return(
        <form onSubmit={handleSubmit}>
           <RadioButton label="SORT ASC" value={sortMode === 'asc'} onChange={handleAscChange} />
           <RadioButton label="SORT DESC" value={sortMode === 'desc'} onChange={handleDescChange} />
           <input type="submit"/>
        </form>
    )
}