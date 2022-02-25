// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Route , BrowserRouter , Switch  } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import Navbar from './components/Navbar';
import DetailsScreen from './screens/DetailsScreen';

function App() {
  return (
   
    <BrowserRouter>
    <Navbar />
    
      {/* <Route path='/users' component={UsersScreen}/> */}
    
      <div className='container'>
      <Switch>
        <Route path = '/' component={HomeScreen} exact/>
        <Route path = '/cart' component={CartScreen} exact/> 
        <Route path = "/productdetail/:id" exact component={DetailsScreen} />   
      
      </Switch>
      </div>
      
    </BrowserRouter>
   
  );
}

export default App;
