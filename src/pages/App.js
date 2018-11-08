import React, {Component} from 'react';
import axios from 'axios';


import {UserFrame, UserList} from "../components";
import './App.scss';
import UserListItem from "../components/UserListItem/UserListItem";
import guid from "../helpers/guid";


class App extends Component {
    state = {
        users: [],
        selectedUser: {}
    };

    handleClick = (id) => {

    };

    async componentDidMount(){
        const request = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = request.data;
        console.log(data);
        this.setState({
            users: data,
            selectedUser:data[0]
        });
    }

    render() {
        const {users} = this.state;
        return (
            <section className='page-wrapper'>
                <h1>User list</h1>
                <main className='main'>
                    <UserFrame/>
                </main>
                <aside className='sidebar'>
                    <UserList users={users}/>
                </aside>
            </section>
        );
    }
}

export default App;