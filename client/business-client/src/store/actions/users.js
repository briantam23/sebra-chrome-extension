import axios from "axios";
import { CREATE_BUSINESS_USER } from '../constants';


export const _createBusinessUser = user => ({
    type: CREATE_BUSINESS_USER,
    user
})

export const createUser = state => {
    const { username, password } = state;

    return dispatch => (
        axios.post('https://sebraapi.herokuapp.com/api/businessRegister', 
            { username, password }
        )
            .then(res => res.data.data)
            .then(data => dispatch(_createBusinessUser(data)))
    )
}