import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from '../UserList/UserList'
import guid from '../../helpers/guid';

const {array} = PropTypes;
const UserList = ({users}) => {
    return(
        <div className='list-box'>
            <h2>User list</h2>
            <ul>
                {users.map((user) => (
                    <li key={guid()}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};



UserList.propTypes = {
    users: array.isRequired
};

export default UserList;
