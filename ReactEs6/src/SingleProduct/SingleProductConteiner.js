import React from 'react';

import axios from '../../node_modules/axios';
import { SingleProductList } from './SingleProductList';


export class SingleProductConteiner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8080/produktai/'+this.props.match.params.id)
            .then((response) => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    buy=(e)=>{
       axios.post('http://localhost:8080/users/buy/'+this.props.match.params.id)
       alert("Prekė pridėta į krepšelį")
        e.preventDefault();

    }

    render() {
       
        return  <SingleProductList  buy={this.buy} products={this.state.products}  />
    }
}