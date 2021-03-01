import React, { useEffect, useState } from 'react';
import './Team.css';
import playerData from '../../fakeData/fakeData.json';
import Player from '../Player/Player';
import Club from '../Club/Club';

const Team = () => {
    const [player, setPlayer] = useState([]);
    const [club, setClub] = useState([]);
     useEffect(() =>{
      setPlayer(playerData);
      console.log(playerData);
    }, [])

    const handleAddPlayer = (player) =>{
        const newClub = [...club, player];
        setClub(newClub);
    }
    return (
        <div className="player-container">
         <div className="team-container">
           <h1 class="text-success">Team member: {player.length}</h1>
          
             {
              player.map(pl => <Player 
                handleAddPlayer = {handleAddPlayer}
                player={pl}></Player>)
             }
         
        </div>
            <div className="club-container">
               <Club club={club}></Club>
            </div>
        </div>
    );
};

export default Team;