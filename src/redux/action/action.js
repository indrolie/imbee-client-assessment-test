export const subscribeToNotification = () => ({
    type: 'SUBSCRIBE_TO_NOTIFICATION'
});

export const subscriptionSucceed = (data) => ({
    type: 'SUBSCRIPTION_SUCCEED'
});

export const subscriptionFailed = (error) => ({
    type: 'SUBSCRIPTION_FAILED',
    payload: error
});