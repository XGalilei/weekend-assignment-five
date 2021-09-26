import React from 'react';
import axios from 'axios';
import './App.css';
import {  HashRouter as Router,  Route} from 'react-router-dom';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

import {useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Feeling />
      <Router>
        <Route exact path= "/feeling" component={Feeling}/>
        <Route exact path= "/understanding" component={Understanding}/>
        <Route exact path= "/support" component={Support}/>
        <Route exact path= "/comments" component={Comments}/>

        <Route/>
      </Router>
    </div>
  );
}

export default App;
