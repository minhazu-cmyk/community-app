import React from 'react';

import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';
import NotMatch from './Components/NotMatch/NotMatch';
import Design from './Components/Design/Design';

function App() {
  return (
   <div>
     <Design></Design>
    <Router>
  <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/">
         <Home></Home>    
        </Route>
        <Route path ="/about/:comment">
         <PostDetails></PostDetails>
       </Route>
      
        <Route path="*">
        <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
    </div>
  );
};

export default App;