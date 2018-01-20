import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import { ProductListContainer } from './AllProducts/ProductListConteiner'
import { AddProductContainer } from './AddEditProducts.js/AddProductConteiner';
import { AdminContainer } from './AdminPanel/AdminConteiner';
import { ProductEditConteiner } from './AddEditProducts.js/ProductEditConteiner';
import { AdminNavigationConteiner } from './NavigationComponentns/AdminNavigationConteiner';
import { SingleProductConteiner } from './SingleProduct/SingleProductConteiner';
import { CartConteiner } from './Cart/CartConteiner';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="container">
          <AdminNavigationConteiner />
          <Switch>
            <Route exact path="/" component={ProductListContainer} />
            <Route exact path="/prekes" component={ProductListContainer} />
            <Route exact path="/sukurti" component={AddProductContainer} />
            <Route exact path="/admin" component={AdminContainer} />
            <Route exact path="/admin/:id" component={ProductEditConteiner} />
            <Route exact path="/prekes/:id" component={SingleProductConteiner} />
            <Route exact path="/myCart" component={CartConteiner} />
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
