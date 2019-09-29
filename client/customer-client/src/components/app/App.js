import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path='/account/(payment|payment-completed)' render={ ({ location, history }) => 
            <Payment pathname={ location.pathname } history={ history }/> } 
          />
          <Route path='/account/(payment|payment-completed)/:recipientUsername/:itemUrl' render={ ({ location, match, history }) => 
            <Payment pathname={ location.pathname } params={ match.params } history={ history }/> } 
          />
          <Route exact path='/(login|create-account)' render={ ({ location, history }) => 
            <Auth pathname={ location.pathname } history={ history }/> } 
          />
          <Route path='/(login|create-account)/:recipientUsername/:itemUrl' render={ ({ location, match, history }) => 
            <Auth pathname={ location.pathname } params={ match.params } history={ history }/> } 
          />
          <Route path='/account/search' render={ () => <FindSites/> } />
          <Route path='/account/search-results' render={ () => <SiteResults/> } />
          <Route path='/account/wallet' render={ () => <Wallet/> } />
          <Route path='/account/(settings|faq)' render={ ({ location, history }) => 
            <Settings pathname={ location.pathname } history={ history }/> } 
          />
          <Route exact path='/' render={ ({ history }) => <Banner history={ history }/> }/>
          <Route path='/:recipientUsername/:itemUrl' render={ ({ match, history }) => 
            <Banner params={ match.params } history={ history }/> }
          />
        </Switch>
        <Route render={ ({ location, history }) => <Nav pathname={ location.pathname } history={ history }/> } />
      </Router>
    )
}


export default App;
