import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>The first user is {props.username}</p>
            <p>The second user is {props.username}</p>
        </div>
    )
};

export default UserOutput;