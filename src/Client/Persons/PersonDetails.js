import React from 'react';
import './person.css'

const PersonDetails = (props) => {
    return (
        <div className="personCard">
            <img src={`https://image.tmdb.org/t/p/w500${props.profile_path}`} alt={props.name} />
            <h4>{props.name}</h4>
        </div>
    );
};

export default PersonDetails;