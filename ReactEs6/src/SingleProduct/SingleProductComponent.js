import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'primereact/components/button/Button';
export class SingleProductComponent extends React.Component {

    render() {

        return (
            <div className="col-xs-12 col-sm-4 text-center">

                <div className="ui card">
                    <div className="image">
                        <img height="260" width="260" src={this.props.image} alt =""/>
                    </div>
                    <div className="meta">
                            {this.props.type} 
                        </div>
                    <div className="content">
                        <a className="header">{this.props.title}</a>
                        <div className="description">
                            <span > {this.props.description}</span>
                        </div>

                        < div className="meta">
                            turime sandelyje :  {this.props.quantity}
                        </div>
                        <div className="meta">
                            {this.props.price} eurų
                        </div>
                    </div>
                    <div className="extra content">
                        <Button label="į krepšelį" className="ui-button-danger" onClick={this.props.buy} />
                    </div>
                </div>
            </div >
        );
    }

};