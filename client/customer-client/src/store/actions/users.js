import axios from "axios";
import { CREATE_CUSTOMER_USER, UPDATE_CUSTOMER_USER } from '../constants';


export const _createCustomerUser = user => ({
    type: CREATE_CUSTOMER_USER,
    user
})

export const createUser = (username, password) => (
    dispatch => (
        axios.post('https://sebraapi.herokuapp.com/api/register', 
            { username, password, userType: 'customer' }
        )
            .then(res => res.data.data)
            .then(data => dispatch(_createCustomerUser(data)))
    )
)

export const _updateCustomerUser = user => ({
    type: UPDATE_CUSTOMER_USER,
    user
})

export const updateUser = password => {
    const token = window.localStorage.getItem('token');
    
    return dispatch => (
        axios.put('https://sebraapi.herokuapp.com/api/updateUser', 
            { headers: { authorization: token }, password }
        )
            .then(res => res.data.data)
            .then(data => dispatch(_updateCustomerUser(data)))
    )
}