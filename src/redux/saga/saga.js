import { all, call, put, takeLatest } from 'redux-saga/effects';
import { subscriptionSucceed, subscriptionFailed, broadcastSucceed, broadcastFailed } from '../action/action';
import { SUBSCRIBE_TO_NOTIFICATION, BROADCAST_MEESAGE } from '../type/type';
import api from '../../apis/index';

function* subscribeToNotification() {
    try {
        const response = yield call(api.subscribeToNotification);
        yield put(subscriptionSucceed(response));
    } catch (error) {
        yield put(subscriptionFailed(error.message));
    }
}

function* broadcastMessage(action) {
    try {
        const { message } = action.payload;
        const response = yield call(api.broadcastMessage, message);

        yield put(broadcastSucceed(response));
    } catch (error) {
        yield put(broadcastFailed(error.message));
    }
}

function* rootSaga() {
    yield all([
        takeLatest(SUBSCRIBE_TO_NOTIFICATION, subscribeToNotification),
        takeLatest(BROADCAST_MEESAGE, broadcastMessage)
    ])
}

export default rootSaga;