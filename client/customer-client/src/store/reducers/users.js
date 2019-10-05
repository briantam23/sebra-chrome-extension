import { CREATE_CUSTOMER_USER, UPDATE_CUSTOMER_USER } from '../constants';


const usersReducer = (state = [], action) => {
    switch(action.type) {
        case CREATE_CUSTOMER_USER:
            return [...state, action.user];
        case UPDATE_CUSTOMER_USER:
            return state;
        default:
            return state;
    }
}


export default usersReducer;