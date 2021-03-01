import React from 'react';

const Club = (props) => {
    const club = props.club;
    const total = club.reduce( (total, player) => total + player.salary , 0)
    return (
        <div className="text-success">
             <h3>Add to Club</h3>
             <h5>Players Booking: {club.length}</h5>
             <p>Total Salary: {total}</p>
             <p>Total Budget: $25000</p>
        </div>
    );
};

export default Club;