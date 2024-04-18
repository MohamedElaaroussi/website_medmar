import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const login = (email, password) => {
    return (dispatch) => {
        const data = {
            email: email,
            password: password,
        };

        api.login(data)
            .then((response) => {
                dispatch(loginSuccess(response.data.user));
            })
            .catch((error) => {
                dispatch(loginFailure(error.message));
            });
    };
};