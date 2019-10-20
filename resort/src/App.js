import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/mainPages/Home';
import Rooms from './components/mainPages/Rooms';
import SingleRoom from './components/mainPages/SingleRoom';
import ErrorPage from './components/mainPages/Error';
import Navbar from './components/nav/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
