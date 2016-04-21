/* @flow */
/* global setTimeout */
/* eslint arrow-body-style: ["warn", "as-needed"]*/

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const requestData = (): Object => ({
    type: REQUEST_DATA
});


export const receiveData = (data: Object): Object => ({
    type: RECEIVE_DATA,
    data
});

export const fetchData = (): Function => (dispatch) => {
    dispatch(requestData());
    return setTimeout(() => {
        const data = { message: 'Welcome to React Native Boilerplate' };
        dispatch(receiveData(data));
    }, 300);
};
