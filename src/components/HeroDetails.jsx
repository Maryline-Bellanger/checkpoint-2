import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HeroDetails.css';

function HeroDetails(props) {
    const [detail, setDetail] = useState([]);
    const heroId = props.match.params.id;

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/Hero/${heroId}`)
        .then((res) => res.data)
        .then((data) => setDetail(data))
    }, [heroId])

    return (
        <div className='HeroDetails'>
            <div className='detail-card'>
            <img className='image-hero-detail' src={detail.image} alt={detail.name} />
                <div className='detail-card-content'>
                    <h2>{detail.name}</h2>
                    <p>Genre : {detail.gender} - Race : {detail.race}</p>
                    <p>Taille : {detail.height} - Poid : {detail.weight}</p>
                </div>
                <div className='detail-card-stat'>
                    <h3>Stats</h3>
                    <p>Vitesse : {detail.speed} - Force : {detail.force}</p>
                    <p>Endurance : {detail.stamina}</p>
                </div>
            </div>
            <Link className='link-detail' to={{pathname:'/'}}>Retour à la page principale</Link>
        </div>
    )
}

export default HeroDetails;
