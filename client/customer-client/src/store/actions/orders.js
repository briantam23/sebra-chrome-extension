import axios from 'axios';
import { UPDATE_ORDER } from '../constants';


const _updateOrder = order => ({
    type: UPDATE_ORDER,
    orders: order
})
export const updateOrder = (auth, history, params) => {
    const amount = 0.25;

    let recipientUsername, itemUrl = null;
    if(params && params.itemUrl) {
        itemUrl = params.itemUrl;
        recipientUsername = params.recipientUsername;
    }

    const token = window.localStorage.getItem('token');

    return dispatch => (
        axios.post('https://sebraapi.herokuapp.com/api/transaction', 
            { amount, recipientUsername, itemUrl, senderUsername: auth.username }, 
            { headers: { authorization: token } }
        )
            .then(res => res.data.data)
            .then(data => {
                history.push(`/account/payment-completed`);
                dispatch(_updateOrder(data));
            })
    )
}