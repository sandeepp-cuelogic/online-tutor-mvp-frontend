import * as actionTypes from "../constants/ActionTypes";
import fetchIntercept from "fetch-intercept";
import "isomorphic-fetch";

const unregister = fetchIntercept.register({
    request: function (url, config) {
        config.headers =  {
                    "Content-Type": "application/json",
                    "Authorization" : "Basic YWRtaW46Y3VlbG9naWNhZG1pbjEyMw==",
                    "access_token" : "riottoken12345678"
                };
        return [url, config];
    },

    requestError: function (error) {
        // Called when an error occured during another 'request' interceptor call
        return Promise.reject(error);
    },

    response: function (response) {
        // Modify the reponse object
        return response;
    },

    responseError: function (error) {
        // Handle an fetch error
        return Promise.reject(error);
    }
});


export const loginClicked = (payload) => {
    return dispatch => {

        dispatch({
            type: actionTypes.LOGIN_ATTEMPTED
        });

        return fetch(
            Config.apiUrl + "/signin",
            {
                method: "POST",
                body: JSON.stringify({
                    "email": payload.email,
                    "password": payload.password
                })
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                return new Promise((resolve, reject) => {

                    if (data.status) {
                        dispatch({
                            type: actionTypes.AUTH_SUCCESS,
                            payload: data.user
                        });
                    } else {
                        dispatch({
                            type: actionTypes.AUTH_FAILED,
                            payload: data.user
                        });
                    }

                    resolve();
                });
            });
    };
}