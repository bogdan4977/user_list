import React from 'react';
import {  } from 'prop-types';
import VideoListItem from '../VideoListItem/VideoListItem'
import guid from '../../helpers/guid';

// const { all, done, process } = filters;

const VideoList = ({users}) => (
    <div className='list-box'>
        <h2>Video list</h2>
        <ul>
            {users.map(user => (
                <VideoListItem key={guid()} {...user} />
            ))}
        </ul>
    </div>
);

VideoList.propTypes = {

};

export default VideoList;
