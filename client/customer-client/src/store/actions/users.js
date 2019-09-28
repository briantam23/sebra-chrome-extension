import axios from "axios";
import { CREATE_CUSTOMER_USER } from '../constants';


export const _createCustomerUser = user => ({
    type: CREATE_CUSTOMER_USER,
    user
})

export const createUser = state => {
    const { username, password } = state;

    return dispatch => (
        axios.post('https://vast-plains-55545.herokuapp.com/api/register', 
            { username, password, userType: 'customer' }
        )
            .then(res => res.data.data)
            .then(data => dispatch(_createCustomerUser(data)))
    )
}