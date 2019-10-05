/* global chrome */

import axios from 'axios';
import { UPDATE_ORDER } from '../constants';


const _updateOrder = order => ({
    type: UPDATE_ORDER,
    orders: order
})
export const updateOrder = (senderUsername, history, itemUrl, recipientUsername) => {
    const amount = 0.25;
    const token = window.localStorage.getItem('token');

    return dispatch => (
        axios.post('https://sebraapi.herokuapp.com/api/buyItem', 
            { amount, recipientUsername, itemUrl, senderUsername },
            { headers: { authorization: token } }
        )
            .then(res => res.data.data)
            .then(data => {
                window.close();
                if(chrome.tabs) {
                    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
                        chrome.tabs.sendMessage(tabs[0].id, {data: 'text'}, res => {
                            console.log('sending message from extension');
                        })
                    })
                }
                history.push('/account/payment-completed');
                dispatch(_updateOrder(data));
            })
    )
}