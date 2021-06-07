import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card'
import './Tindercards.css';
import axios from './axios';

function Tindercards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/cards');
            setPeople(req.data);
        }
        fetchData();
    }, [])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className="tinderCards">

            <div className="tinderCards__cardContainer">
                {people.map(person => {
                    return <TinderCard key={person.name} className="swipe" onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
                        <div className="card" style={{ backgroundImage: `url(${person.imgUrl})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                })}
            </div>

        </div>
    )
}

export default Tindercards
