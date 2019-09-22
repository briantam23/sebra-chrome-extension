import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exchangeTokenForAuth } from '../../store/actions/auth';
import Banner from '../Banner';
import Auth from '../auth/Auth';
import Payment from '../navScreens/payment/Payment';
import FindSites from '../navScreens/search/findSites/FindSites';
import SiteResults from '../navScreens/search/siteResults/SiteResults';
import Wallet from '../navScreens/wallet/Wallet';
import Settings from '../navScreens/settings/Settings';
import Nav from '../Nav';


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(exchangeTokenForAuth()) });

    return (
      <Router>
        <Route exact path='/' render={ ({ history }) => <Banner history={ history }/> } />
        <Route exact path='/(login|create-account)' render={ ({ location, match, history }) => <Auth pathname={ location.pathname } params={ match.params } history={ history }/> } />
        <Route path='/(login|create-account)/:recipientAddress/:chargeAmount' render={ ({ location, match, history }) => <Auth pathname={ location.pathname } params={ match.params } history={ history }/> } />
        <Route path='/account/:authAddress/payment' render={ ({ location, match, history }) => <Payment pathname={ location.pathname } params={ match.params } history={ history }/> } />
        <Route path='/account/:authAddress/payment-complete' render={ ({ location, match, history }) => <Payment pathname={ location.pathname } params={ match.params } history={ history }/> } />
        <Route path='/account/:authAddress/search' render={ () => <FindSites/> } />
        <Route path='/account/:authAddress/search-results' render={ () => <SiteResults/> } />
        <Route path='/account/:authAddress/wallet' render={ () => <Wallet/> } />
        <Route path='/account/:authAddress/settings' render={ ({ history }) => <Settings history={ history }/> } />
        <Route render={ ({ location, history }) => <Nav pathname={ location.pathname } history={ history }/> } />
      </Router>
    )
}


export default App;
