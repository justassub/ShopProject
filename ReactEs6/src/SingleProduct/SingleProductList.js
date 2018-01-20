import React from 'react';
import { SingleProductComponent } from './SingleProductComponent';



export var SingleProductList = (props) => {
    const products = props.products.map((product1,index) => {
        
         var cardComponent=   <SingleProductComponent
                key={index}
                id={product1.id}                
                title={product1.title}
                type={product1.type}
                image={product1.image}
                description={product1.description}
                price={product1.price}
                quantity={product1.quantity}
                history={props.history}
                buy={props.buy}

            />;
            return (cardComponent
            );
            
        
    });
    return (
        <div>
            {products}
        </div>
    );
};