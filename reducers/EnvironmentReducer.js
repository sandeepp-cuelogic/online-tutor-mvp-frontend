import * as actionTypes from "../constants/ActionTypes";

export function envInfo(state = {}, action) {
    switch (action.type) {
        case actionTypes.LODING_ENVIRONMENT:
        case actionTypes.ENVIRONMENT_CLICKED:
            return Object.assign({}, state, {
                isLoading: true
            });
        case actionTypes.ENVIRONMENT_SUCCESS:

            return Object.assign({}, state, {
                isLoading: false,
                data: action.payload
            });

        case actionTypes.ENVIRONMENT_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.payload
            });
        default:
            return state;
    }

}