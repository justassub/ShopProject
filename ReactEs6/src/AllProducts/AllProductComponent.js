
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import {Button} from 'primereact/components/button/Button';
export class AllProductComponent extends React.Component {

    render() {

        return (
            <div className="col-xs-12 col-sm-4 text-center">

                <div className="ui card">
                    <div className="image">
                        <img height="260" width="260" src={this.props.image} alt="" />
                    </div>
                    <div className="content">
                        <a className="header">{this.props.title}</a>
                        <div className="description">
                            <span > {this.props.description}</span>
                        </div>
                        <div className="meta">
                        {this.props.price} eurų
                        </div>
                    </div>
                    <div className="extra content">
                    <NavLink to ={"/prekes/"+this.props.id}>
                    <Button label="Išsamesnė informacija" className="ui-button-info"/></NavLink>
                    </div>
                </div>
            </div>
        );
    }

};