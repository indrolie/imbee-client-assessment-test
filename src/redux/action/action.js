import { SUBSCRIBE_TO_NOTIFICATION, SUBSCRIPTION_SUCCEED, SUBSCRIPTION_FAILED,
    BROADCAST_MEESAGE, BROADCAST_SUCCEED, BROADCAST_FAILED } from "../type/type";

export const subscribeToNotification = () => ({
    type: SUBSCRIBE_TO_NOTIFICATION
});

export const subscriptionSucceed = () => ({
    type: SUBSCRIPTION_SUCCEED
});

export const subscriptionFailed = (error) => ({
    type: SUBSCRIPTION_FAILED,
    payload: error
});

export const broadcastMessage = (message) => ({
    type: BROADCAST_MEESAGE,
    payload: {
        message
    }
});

export const broadcastSucceed = () => ({
    type: BROADCAST_SUCCEED
});

export const broadcastFailed = (error) => ({
    type: BROADCAST_FAILED,
    payload: error
});