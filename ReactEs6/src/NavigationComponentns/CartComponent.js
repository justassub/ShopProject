import React from 'react';
import { Button } from 'primereact/components/button/Button';
import { NavLink } from 'react-router-dom';


export var CartComponent = (props) => {
  
    return (
        <div>
       < span className="glyphicon glyphicon-tag">
       <NavLink to="/myCart">
        <Button onClick={props.cartClick} className="ui-button-danger" label="Mano krepšelis" /></NavLink></span>
        
        </div>
    )
}
