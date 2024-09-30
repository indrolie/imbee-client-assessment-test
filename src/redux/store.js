import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import dataReducer from './reducer/reducer';
import rootSaga from './saga/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: dataReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;