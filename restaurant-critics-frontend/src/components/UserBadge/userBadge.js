import React from 'react';
import { Image } from 'react-bootstrap';
import './userBadge.css';

function UserBadge({ user }) {
    return (
        <div className="user-badge">
            <Image
                src={user.profileImageUrl}  // Display the uploaded profile image
                roundedCircle
                className="user-badge-image"
            />
            <p>{user.name}</p>
        </div>
    );
}

export default UserBadge;
