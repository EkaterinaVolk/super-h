import '../App.css';
import React from 'react'

function Card(props) {
    return (
        <div className="card">
                <img className="img" src={props.url} alt="hero"/>
                <h4 className="header">{props.name}</h4>
            <p className="paragraph">{props.universe}</p>
            <p className="paragraph">{props.alterego}</p>
            <p className="paragraph">{props.occupation}</p>
            <p className="paragraph">{props.superpowers}</p>
        </div>
    );
  }


export default Card;