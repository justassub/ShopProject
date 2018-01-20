import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';

export var AddProductComponent =(props)=>{
   
    return(
        <form >
             <div>
           
                <div>
                <Dropdown value={props.type} options={props.productOptions} onChange={props.changeDropdown} style={{width:'300px'}} placeholder="Pasirinkite produkto tipą"/>
                
                </div>
            </div>


            <div>
                <p>Prekes pavadinimas</p>
                <div>
                <input type="text" className="form-control" id="title" placeholder="Pavadinimas" value={props.title}
                           onChange={props.onChange}/>
                </div>
            </div>
            

            <div>
                <p>Paveiksliuko nuoroda</p>
                <div>
                <input type="text" className="form-control" id="image" placeholder="Paveiksliuko nuoroda" value={props.image}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div>
                <p>Aprašymas</p>
                <div>
                <input type="text" className="form-control" id="description" placeholder="Aprašymas" value={props.description}
                           onChange={props.onChange}/>
                </div>
            </div>


            <div>
                <p>Kaina</p>
                <div>
                <input type="number" className="form-control" id="price" placeholder="Kaina" value={props.price}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div>
                <p>Kiekis</p>
                <div>
                <input type="number" className="form-control" id="quantity" placeholder="Kiekis" value={props.quantity}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div >
                <div >
                  
                    <button   onClick={props.onClick}>{props.buttonText}</button>
                    <button type="submit"  onClick={props.history.goBack}>Atšaukti</button>
                </div>
            </div>
</form>





    )
}

