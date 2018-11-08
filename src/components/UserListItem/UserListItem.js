import React from 'react';
import PropTypes from 'prop-types';

const {array} = PropTypes;
const UserListItem = ({users}) => {
    return (
        <li>
            <h3>{users.name}</h3>
            <p>{users.email}</p>
            <p>{users.phone}</p>
        </li>
    )
};

UserListItem.propTypes = {
    users: array.isRequired
};

export default UserListItem;