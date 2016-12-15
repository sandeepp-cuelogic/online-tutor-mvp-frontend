import * as actionTypes from "../constants/ActionTypes";

export function userInfo(state = {}, action) {

    switch (action.type) {
        case actionTypes.LOGIN_ATTEMPTED:
        case actionTypes.LOGIN_CLICKED:
            return Object.assign({}, state, {
                fetchingUserDetails: true
            });
        case actionTypes.AUTH_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                fetchingUserDetails: false,
                user: action.payload,
                error: null
            });

        case actionTypes.AUTH_FAILED:
            return Object.assign({}, state, {
                isLoggedIn: false,
                fetchingUserDetails: false,
                error: action.payload,
                user: null
            });
        default:
            return state;
    }

}