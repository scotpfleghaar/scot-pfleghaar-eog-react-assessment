import * as actions from "../actions";

const initialState = {
    loading: false,
    data: {}
};

/**
 *
 * @param state
 * @param action
 * @returns {{loading: boolean}}
 */
const startLoading = (state, action) => {
    return { ...state, loading: true };
};

/**
 *
 * @param state
 * @param action
 * @returns {{data: *}}
 */
const droneDataReceived = (state, action) => {
    return { ...state, data: action.data,  loading: false };
};

const handlers = {
    [actions.FETCH_DRONE_DATA]: startLoading,
    [actions.DRONE_DATA_RECEIVED]: droneDataReceived
};

// This is really nice approach, WOW! Kudos to the developer
export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};
