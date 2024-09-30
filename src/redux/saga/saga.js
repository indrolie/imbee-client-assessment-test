import { call, put, takeLatest } from 'redux-saga/effects';
import { subscriptionSucceed, subscriptionFailed } from '../action/action';
import { SUBSCRIBE_TO_NOTIFICATION, SUBSCRIPTION_SUCCEED, SUBSCRIPTION_FAILED } from '../type/type';
import api from '../../apis/index';

function* subscribeToNotification() {
    try {
        const response = yield call(api.subscribeToNotification);
        yield put(subscriptionSucceed(response));
    } catch (error) {
        yield put(subscriptionFailed(error.message));
    }
}

function* rootSaga() {
    yield takeLatest(SUBSCRIBE_TO_NOTIFICATION, subscribeToNotification);
}

export default rootSaga;