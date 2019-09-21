import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exchangeTokenForAuth } from '../../store/actions/auth';
import Banner from '../Banner';
import Auth from '../Auth';
import Account from '../account/Account';
//import Dashboard from '../dashboard/Dashboard';
import Nav from '../Nav';


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(exchangeTokenForAuth()) });

    return (
      <Router>
        <Route exact path='/' render={ ({ history }) => <Banner history={ history }/> } />
        <Route exact path='/(login|create-account)' render={ ({ location, match, history }) => <Auth pathname={ location.pathname } params={ match.params } history={ history }/> } />
        <Route path='/(login|create-account)/:recipientAddress/:chargeAmount' render={ ({ location, match, history }) => <Auth pathname={ location.pathname } params={ match.params } history={ history }/> } />
        <Route /* exact  */path='/(account|account/completed)' render={ ({ location, match, history }) => <Account pathname={ location.pathname } params={ match.params } history={ history }/> } />
        {/* <Route path='/(account|account/completed)/:recipientAddress/:chargeAmount' render={ ({ location, match, history }) => <Account pathname={ location.pathname } params={ match.params } history={ history }/> } /> */}
        {/* <Route exact path='/dashboard' render={ ({ history }) => <Dashboard history={ history }/> } /> */}
        <Route render={ ({ location }) => <Nav pathname={ location.pathname }/> } />
      </Router>
    )
}


export default App;
