/* global chrome */

import axios from 'axios';
import { UPDATE_ORDER } from '../constants';


const _updateOrder = order => ({
    type: UPDATE_ORDER,
    orders: order
})
export const updateOrder = (auth, history, itemUrl, recipientUsername) => {
    const amount = 0.25;
    const token = window.localStorage.getItem('token');

    return dispatch => (
        axios.post('https://sebraapi.herokuapp.com/api/buyItem', 
            { amount, recipientUsername, itemUrl, senderUsername: auth.userName }, 
            { headers: { authorization: token } }
        )
            .then(res => res.data.data)
            .then(data => {
                window.close();
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {data: 'text'}, function(response) {
                        console.log('sending message from extension');
                    });
                });
                history.push('/account/payment-completed');
                dispatch(_updateOrder(data));
            })
    )
}