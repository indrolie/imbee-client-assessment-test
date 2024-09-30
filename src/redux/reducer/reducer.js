const initialState = {
    data: null,
    loading: false,
    error: null
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBSCRIBE_TO_NOTIFICATION':
            return { ...state, loading: true };
        case 'SUBSCRIPTION_SUCCEED':
            return { ...state, data: action.payload, loading: false };
        case 'SUBSCRIPTION_FAILED':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export default dataReducer;
