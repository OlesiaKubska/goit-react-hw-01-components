import React from 'react';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
        {friends.map(friend => (
            <FriendListItem key={friend.id} {...friend} />
        ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className="item">
        <span className={isOnline ? 'status online' : 'status offline'}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};