import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroCard from '../components/HeroCard';
import './HeroList.css'

function HeroList() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        axios
        .get("https://lit-badlands-40023.herokuapp.com/heros")
        .then((res) => res.data)
        .then((data) => setHeroes(data))
    }, [])

    return (
        <div className="HeroList">

            <div className="hero-container">
                {heroes
                .map((hero) => (
                    <div key={hero.id}>
                        <HeroCard hero={hero} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default HeroList;
