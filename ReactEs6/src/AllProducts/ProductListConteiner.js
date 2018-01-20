import React from 'react';
import {ProductListComponent} from './ProductListComponent'
import axios from '../../node_modules/axios';


export class ProductListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: []};
    }
    componentWillMount = () => {
        axios.get('http://localhost:8080/produktai')
            .then((response) => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
       
        return <ProductListComponent products={this.state.products}  />
    }
}