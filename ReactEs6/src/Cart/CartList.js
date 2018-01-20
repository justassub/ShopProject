import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartListComponent } from './CartListComponent';


const tableStyle = {
    margin : {marginTop : 20},
};

export var CartList = (props) => {

    const products = props.products.map((product, index) => {
        return (
            <CartListComponent
                key = {index}
                id = {product.id}
                image = {product.image}
                title = {product.title}
                price={product.price}
                quantity={product.quantity}
                history = {props.history}
                remove = {props.remove}
            />
        );
    });

    return (
        <div>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nuotrauka</th>
                            <th>Pavadinimas</th>
                            <th>Kaina</th>
                            <th>kiekis</th>
                            <th>Veiksmas</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

