
import React from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AddProductComponent } from './AddProductComponent';


export class ProductEditConteiner extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            description: '',
            price: 0,
            quantity: 0,
            type:null,
            history: props.history
        }
    }

            
        

          
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        this.setState({
                [name]: value
            }
        );
};

        edit = (event) => {
            const outputProduct = {
            title: this.state.title,
            image: this.state.image,
            description: this.state.description,
            price: this.state.price,
            quantity: this.state.quantity,
            type:this.state.type
    };
    
    axios.put("http://localhost:8080/produktai/"+this.props.match.params.id, outputProduct)
        .then((response) => {
            this.setState( {
                title: '',
                image: '',
                description: '',
                price: 0,
                quantity: 0,
                type:null
            });
            event.preventDefault();
        })
        .catch((error) => {
            console.log(error);
        });
        event.preventDefault();
};


changeDropdown =(event)=>{
   this.setState({
        type:event.value
    })
}

render() {

var types = [
    {label: 'Maistas', value: 'maistas'},
    {label: 'Drabužis', value: 'drabužis'},
    {label: 'Įranga', value: 'įranga'},
   
];
    return (
        <div>
            <AddProductComponent
                title={this.state.title}
                image={this.state.image}
                description={this.state.description}
                price={this.state.price}
                quantity={this.state.quantity}
                onChange={this.handleChange}
                onClick={this.edit}
                history={this.state.history}
                productOptions={types}
                type={this.state.type}
                changeDropdown={this.changeDropdown}
                buttonText="Užregistruoti"
            />
        </div>
    );
}
}