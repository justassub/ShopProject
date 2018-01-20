import React from 'react';
import axios from 'axios';
import { AdminNavigation } from './AdminNavigation';

export class AdminNavigationConteiner extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
            username: '',
        userProductsNumber:''};
    }

    usernameChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    connect=(e)=>{
       
        axios.post('http://localhost:8080/users/'+this.state.username)
        .then((response) => {            
            axios.get('http://localhost:8080/users/productcount')
            .then((response)=>{
                this.setState({
                    userProductsNumber:response.data
                })
            })
        })
        .catch((error) => {
            console.log(error);
        });
        e.preventDefault();

    }

  

    render (){
        return (
            <AdminNavigation 
            connect={this.connect}
            username={this.state.username}
            usernameChange={this.usernameChange}
            userProductsNumber={this.state.userProductsNumber}
            cartClick={this.cartClick}
            
            />
        )
    }
}
