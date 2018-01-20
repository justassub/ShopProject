import React, {Component} from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {AdminProductListComponent} from "./AdminProductListComponent";

export class AdminContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/produktai')      
            .then((response) => {
                this.setState({products: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    

 
   

  

 

    render() {
        return (
            <div>                
                <AdminProductListComponent  products={this.state.products} history={this.props.history}/>
            </div>
        );
    }
}