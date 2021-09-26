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

  const fetchEntries = () => {
    axios({
      method: 'GET',
      url: '/'
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path= "/" component={Feeling}/>
        <Route exact path= "/understanding" component={Understanding}/>
        <Route exact path= "/support" component={Support}/>
        <Route exact path= "/comments" component={Comments}/>
        <Route exact path= "/review" />

        <Route exact path= "/admin"/>
      </Router>
    </div>
  );
}

export default App;
