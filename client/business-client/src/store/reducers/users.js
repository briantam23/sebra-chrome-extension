import { CREATE_BUSINESS_USER } from '../constants';


const usersReducer = (state = [], action) => {
    switch(action.type) {
        case CREATE_BUSINESS_USER:
            return [...state, action.user];
        default:
            return state;
    }
}


export default usersReducer;