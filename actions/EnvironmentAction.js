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


export const environmentClicked = () => {   
    return dispatch => {

        dispatch({
            type: actionTypes.LODING_ENVIRONMENT
        });

        return fetch(
            Config.apiUrl + "/environment",
            {   
                method: "GET"
            })
            .then((response) => {   
                return response.json();
            })
            .then((data) => {
                return new Promise((resolve, reject) => {

                    if (data.environments) {    
                        dispatch({
                            type: actionTypes.ENVIRONMENT_SUCCESS,
                            payload: data.environments
                        });
                    } else {
                        dispatch({
                            type: actionTypes.ENVIRONMENT_FAILED,
                            payload: data.environments
                        });
                    }

                    resolve();
                });
            });
    };
}