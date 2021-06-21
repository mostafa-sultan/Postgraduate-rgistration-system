import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navbar"; 
// Admin accept requists
import AdminMainPage from "./screen/admin/mainPage" 
// signin Admin
import Signin from './screen/signin/signin';
import registrationForm from './screen/registrationForm/registrationForm'; 
import Profile from './screen/student/profile'; 
import Aplication from "./screen/admin/aplication";
import EmpDetail from "./screen/employe/empDetail";
import EmpAplication from "./screen/employe/empAplication";
class App extends Component {
 

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* <NavBar productsCount={this.state.products.length} /> */}
        <main className="container">
          <Switch>
            {/* <Route
              path="/products/:id/:name?"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products}
                  onIncrement={this.IncrementHandler}
                  onDelete={this.handleDelete}
                  onReset={this.handleReset}
                  {...props}
                />
              )}
            />
            <Route path="/notfound" component={NotFound} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/home" exact component={Home} /> */}
            <Route path="/empAplication" exact component={EmpAplication} />  
            <Route path="/empDetail/:id" exact component={EmpDetail} />  
            <Route path="/student" exact component={Profile} />  
            <Route path="/student/:id" exact component={Profile} />  
            <Route path="/userApp/:id" exact component={Aplication} />  
            <Route path="/admin" exact component={AdminMainPage} />  
            <Route path="/register" exact component={registrationForm} />
            <Route path="/login" exact component={Signin} />
            <Redirect from="/" to="/login" />
            {/* <Redirect from="/" to="/home" /> */}
            <Redirect to="/notfound" />
          </Switch>
          {/* <ShoppingCart
            products={this.state.products}
            onIncrement={this.IncrementHandler}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
