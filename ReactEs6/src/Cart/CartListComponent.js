import React from 'react';
import axios from 'axios';
import {Button} from 'primereact/components/button/Button';

export var CartListComponent = (props) => {
  var {id, image, title,price,quantity} = props;


 var deleteFromCart=(e)=>{
  axios.get('http://localhost:8080/users/user/cart/remove/'+id)      
  .then((response) => {
      alert("Preke pašalinta iš krepšelio")
  })
  .catch((error) => {
      console.log(error);
  });

 }
    



  return (
      <tr>
        <td>{id}</td>
        <td><img src={image} alt="" height="150" width="150"/></td>
        <td>{title}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>           
            
            <Button label="Pašalinti produktą iš krepšelio" className="ui-button-danger" onClick={deleteFromCart}/></td>
      </tr>
  );

};