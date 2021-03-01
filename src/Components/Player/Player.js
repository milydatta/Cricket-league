import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Player.css';

const Player = (props) => {
    console.log(props.player.name);
    const {image, name, salary} = props.player
     return (
        <div className="player">
            <div className="player-image">
                <img src={image} alt=""/>
            </div>
            <div className="player-info">
                <h4 className="player-name text-success">Name: {name}</h4>
                 <br/>
                 <p className="text-success">Salary: ${salary}</p>
                 <br/>
                 <button
                  className="btn btn-success"
                  onClick={() => props.handleAddPlayer(props.player)}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} /> Booking Confirm</button>
            </div>
        </div>
    );
};

export default Player;