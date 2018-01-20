import React, {Component} from 'react';
import axios from 'axios';

import { CartList } from './CartList';

export class CartConteiner extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/users/user/cart')      
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
                <CartList  products={this.state.products} history={this.props.history}/>
            </div>
        );
    }
}