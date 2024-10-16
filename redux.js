// redux.js
// Action Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action Creators
const login = (user) => ({
    type: LOGIN,
    payload: user,
});

const logout = () => ({
    type: LOGOUT,
});

// Initial State
const initialState = {
    isAuthenticated: false,
    user: null,
};

// Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

// Store
const createStore = (reducer) => {
    let state;
    const listeners = [];

    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };
    const subscribe = (listener) => {
        listeners.push(listener);
    };

    dispatch({}); // Initialize state
    return { getState, dispatch, subscribe };
};

// Create and export store
const store = createStore(authReducer);
