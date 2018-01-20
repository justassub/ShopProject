import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Toolbar } from 'primereact/components/toolbar/Toolbar';
import { Button } from 'primereact/components/button/Button';
import { Username } from './Username';
import { CartComponent } from './CartComponent';


export var AdminNavigation = (props) => {

    return (
        <div>
            <Username username={props.username} usernameChange={props.usernameChange} connect={props.connect}/>
            <Toolbar>
                <div className="ui-toolbar-group-left">

                    <NavLink to="/sukurti">
                        <Button label="Pridėti prekę" icon="fa-plus" />
                    </NavLink>
                    <NavLink to="/prekes">
                        <Button label="Visos prekės " icon="fa-folder-open" className="ui-button-success" />
                    </NavLink>
                    <NavLink to="/admin/">
                        <Button label="Admino panelė" icon="fa-folder-open" className="ui-button-success" />
                    </NavLink>

                 

                </div>
                <div className="ui-toolbar-group-right">
                    <CartComponent userProductsNumber ={props.userProductsNumber} userName={props.username} history={props.history} cartClick={props.cartClick} />
                </div>
            </Toolbar>
        </div>
    )
}