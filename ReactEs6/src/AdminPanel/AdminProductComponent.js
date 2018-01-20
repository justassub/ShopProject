import React from 'react';
import axios from 'axios';
import {Button} from 'primereact/components/button/Button';
import { NavLink } from 'react-router-dom';


export var AdminProductComponent = (props) => {
  var {id, image, title,price,quantity} = props;


 var removeItem=(event)=>{
    axios.delete('http://localhost:8080/produktai/'+id)
    .then((response) => {
      
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
            <NavLink to={"/admin/"+id}> 
            <Button label="Pakeisti produkto duomenis" className="ui-button-warning"/></NavLink>
            
            <Button label="Pašalinti produktą" className="ui-button-danger" onClick={removeItem}/></td>
      </tr>
  );

};