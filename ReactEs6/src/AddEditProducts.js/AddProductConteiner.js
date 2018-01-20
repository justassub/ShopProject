import {AddProductComponent} from './AddProductComponent'
import React from 'react';
import axios from 'axios';



export class AddProductContainer extends React.Component{
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

        register = (event) => {
            const outputProduct = {
            title: this.state.title,
            image: this.state.image,
            description: this.state.description,
            price: this.state.price,
            quantity: this.state.quantity,
            type:this.state.type
    };
    
    axios.post("http://localhost:8080/produktai/add", outputProduct)
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
                onClick={this.register}
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