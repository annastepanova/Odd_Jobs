import React from 'react';

import './App.css';
import Home from './pages/Home'
import Services from './pages/Services/components/Services'
import Support from './pages/Support'
import Register from './pages/Register'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import SearchResults from './pages/SearchResults'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/services/support" component={Support}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/results" component={SearchResults} />
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App