import React from 'react';
import { Button } from 'primereact/components/button/Button';

export var Username = (props) => {

    return (
        <form className="navbar-form navbar-left" >
            <div className="form-group">
                <input className="form-control input-sm" placeholder="Username" type="text" value={props.username} onChange={props.usernameChange} />
                <Button label="Prisijungti" className="ui-button-secondary" onClick={props.connect} />
            </div>
        </form>
    );
}


