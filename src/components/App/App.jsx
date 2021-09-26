import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {  HashRouter as Router,  Route} from 'react-router-dom';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Admin from '../Admin/Admin';
import Review from '../Review/Review';

import {useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = () => {
    axios({
      method: 'GET',
      url: '/feedback',
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: 'SET_ENTRIES',
        payload: response.data
      });
      }).catch(error => {
        console.log('Oopsies...', error);;
    });
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
        <Route exact path= "/review" component={Review}/>

        <Route exact path= "/admin" component={Admin}/>
      </Router>
    </div>
  );
}

export default App;
