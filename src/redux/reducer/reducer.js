import { SUBSCRIBE_TO_NOTIFICATION, SUBSCRIPTION_SUCCEED, SUBSCRIPTION_FAILED} from '../type/type'

const initialState = {
    data: null,
    loading: false,
    error: null,
    subscribed: false
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIBE_TO_NOTIFICATION:
            return { ...state, loading: true, error: null };
        case SUBSCRIPTION_SUCCEED:
            return { ...state, subscribed: true, loading: false };
        case SUBSCRIPTION_FAILED:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default dataReducer;