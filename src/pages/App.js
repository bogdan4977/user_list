import React, {Component} from 'react';
import axios from 'axios';


import {VideoFrame, VideoList} from "../components";
import './App.scss';
import VideoListItem from "../components/VideoListItem/VideoListItem";
import guid from "../helpers/guid";


class App extends Component {
    state = {
        users: [],
        selectedUser: {}
    };

    handleClick = (id) => {

    };

    async componentDidMount(){
        const users = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({users, selectedUser:users[0]});
    }

    render() {
        const {users} = this.state;
        return (
            <section className='page-wrapper'>
                <h1>Video list</h1>
                <main className='main'>
                    <VideoFrame/>
                </main>
                <aside className='sidebar'>
                    {/*<VideoList users={users}/>*/}
                    <ul>
                        {users.map((user) => (
                            <li key={guid()}>{user.toString()}</li>
                        ))}
                    </ul>
                </aside>
            </section>
        );
    }
}

export default App;