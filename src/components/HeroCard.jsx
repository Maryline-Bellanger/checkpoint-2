import React, { useState } from 'react';
import './HeroCard.css'

function HeroCard({ hero }) {
    return (
        <div className='Hero'>
            <article className='hero-card'>
                <img src={hero.image} alt={hero.name} />
                <div className='hero-card-content'>
                    <h2>{hero.name}</h2>
                    <div>
                        <span>Endurance : {hero.stamina}</span>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default HeroCard;
