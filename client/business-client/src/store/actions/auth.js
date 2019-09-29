import { SET_BUSINESS_AUTH, REMOVE_AUTH } from '../constants';
import axios from 'axios';


export const exchangeTokenForAuth = history => (
    dispatch => {

        const token = window.localStorage.getItem('token');

        if(!token) return;
        return axios.get('https://sebraapi.herokuapp.com/api/authBusiness', 
            { headers: { authorization: token } }
        )
            .then(res => res.data.data)
            .then(auth => {
                dispatch(_setBusinessAuth(auth));
                if(history) history.push('/dashboard'); 
            }) 
            .catch(ex => window.localStorage.removeItem('token'))
    }
)

const _setBusinessAuth = auth => ({
    type: SET_BUSINESS_AUTH,
    auth
})
const _removeAuth = auth => ({
    type: REMOVE_AUTH,
    auth
})

export const logout = history => {
    window.localStorage.removeItem('token');
    history.push('/login')
    return _removeAuth({});
 }

export const login = (state, history) => {
    const { username, password } = state;
    
    return dispatch => (
        axios.post('https://sebraapi.herokuapp.com/api/authBusiness', 
            { username, password }
        )
            .then(res => res.data.data)
            .then(data => {
                window.localStorage.setItem('token', data.token);
                dispatch(exchangeTokenForAuth(history));
            })
    )
}