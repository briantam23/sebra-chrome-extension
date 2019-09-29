import { SET_CUSTOMER_AUTH, REMOVE_AUTH } from '../constants';
import axios from 'axios';


export const exchangeTokenForAuth = history => (
    dispatch => {

        const token = window.localStorage.getItem('token');

        if(!token) return;
        return axios.get('https://sebraapi.herokuapp.com/api/authCustomer', 
            { headers: { authorization: token } }
        )
            .then(res => res.data.data)
            .then(auth => {
                dispatch(_setCustomerAuth(auth));
                history.push('/');
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
    history.push('/')
    return _removeAuth({});
 }

export const login = (state, recipientAddress, itemUrl, history) => {
    const { username, password } = state;
    
    return dispatch => (
        axios.post('https://sebraapi.herokuapp.com/api/authCustomer', 
            { username, password, recipientAddress, itemUrl }
        )
            .then(res => res.data.data)
            .then(data => {
                window.localStorage.setItem('token', data.token);
                dispatch(exchangeTokenForAuth(history));
            })
    )
}