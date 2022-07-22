import React from 'react'
import Overview from './Overview';
import Details from './Details';
import Controls from './Controls';
import cardService from '../services/cards';
import card_data from '../data/card_data';


import { useState, useEffect} from 'react';


export default function CardGame() {
    const [sortMode, setSortMode] = useState('');
    const [selected, setSelected] = useState('');

   useEffect(() => {
        cardService
            .getAll()
            .then(response => {
                console.log('Status Code: 200 OK')
            })
    }, [])


   const addCard = (event) => {

    event.preventDefault()
    
    //find objects and their elements from an array by "selected" id
    const cardObject = card_data.find((el) => el.id === selected);
   
    if(selected !== ''){
    cardService
        .create(cardObject)
        .then(response => {
            alert(`Added ${cardObject.real_name}`);
            
        })
        .catch(error => {
            console.log(error.response.data);
            alert(`${cardObject.real_name} already added`);
        });
    
    }
}

    const handleAscChange = () => {
        setSortMode('asc');
    };

    const handleDescChange = () => {
        setSortMode('desc');
    };

    
    
    const childToParent = (childdata) => {
        setSelected(childdata);
    }
    


    //TODOS: 1.implement sorting DONE 2.send Details to db.json DONE 3.display cards DONE (& expand) 4.css
    return(
        <main>
        <Details selected={selected} cardData={card_data}/>
        <Controls 
            sortMode={sortMode} 
            handleDescChange={handleDescChange} 
            handleAscChange={handleAscChange} 
            handleSubmit={addCard}/>
        <Overview sortMode={sortMode} childToParent={childToParent} cardData={card_data}/>
        </main>
    )
}