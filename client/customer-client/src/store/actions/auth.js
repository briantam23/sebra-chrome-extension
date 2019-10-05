/* global chrome */

import { SET_CUSTOMER_AUTH, REMOVE_AUTH } from '../constants';
import axios from 'axios';


export const exchangeTokenForAuth = (history, itemUrl) => (
    dispatch => {
        const token = window.localStorage.getItem('token');

        if(!token) return;
        return axios.get(`https://sebraapi.herokuapp.com/api/authCustomer?itemUrl=${itemUrl}`,
            { headers: { authorization: token } }
        )
            .then(res => res.data.data)
            .then(auth => {
                dispatch(_setCustomerAuth(auth));
                if(history) history.push('/');
            })
            .catch(ex => window.localStorage.removeItem('token'))
    }
)

export const _setCustomerAuth = auth => ({
    type: SET_CUSTOMER_AUTH,
    auth
})
const _removeAuth = auth => ({
    type: REMOVE_AUTH,
    auth
})

export const logout = history => {
    window.localStorage.removeItem('token');
    if(chrome.storage) chrome.storage.local.remove('jwtToken');
    history.push('/')
    return _removeAuth({});
 }

export const login = (username, password, recipientUsername, itemUrl, history) => (
    dispatch => (
        axios.post('https://sebraapi.herokuapp.com/api/authCustomer', 
            { username, password, recipientUsername, itemUrl }
        )
            .then(res => res.data.data)
            .then(data => {
                window.localStorage.setItem('token', data.token);
                if(chrome.storage) chrome.storage.local.set({ token: localStorage['token'] });
                dispatch(exchangeTokenForAuth(history, itemUrl));
            })
    )
)