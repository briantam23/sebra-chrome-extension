import axios from "axios";
import { CREATE_CUSTOMER_USER, UPDATE_CUSTOMER_USER } from '../constants';
import { _setCustomerAuth } from './auth';


export const _createCustomerUser = user => ({
    type: CREATE_CUSTOMER_USER,
    user
})

export const createUser = state => {
    const { username, password } = state;

    return dispatch => (
        axios.post('https://sebraapi.herokuapp.com/api/register', 
            { username, password, userType: 'customer' }
        )
            .then(res => res.data.data)
            .then(data => dispatch(_createCustomerUser(data)))
    )
}

export const _updateCustomerUser = user => ({
    type: UPDATE_CUSTOMER_USER,
    user
})

export const updateUser = password => (
    dispatch => (
        axios.put('https://sebraapi.herokuapp.com/api/updateCustomerUser', 
            { headers: { authorization: token }, password }
        )
            .then(res => res.data.data)
            .then(data => dispatch(_setCustomerAuth(data)))
            .then(data => dispatch(_updateCustomerUser(data)))
    )
)