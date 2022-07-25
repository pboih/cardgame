import React from 'react';
import RadioButton from './RadioButton';


export default function Controls({sortMode, handleAscChange, handleDescChange, handleSubmit,}) {

    return(
        <div className='controls'>
        <form onSubmit={handleSubmit}>
        <h1 className='controls-title'>Controls</h1>
            <div className='controls-selection'>
           <RadioButton label="SORT ASC" value={sortMode === 'asc'} onChange={handleAscChange} />
           <RadioButton label="SORT DESC" value={sortMode === 'desc'} onChange={handleDescChange} />
           </div>
           <input type="submit" value="SUBMIT" className="controls-submit"/>
        </form>
        </div>
    )
}