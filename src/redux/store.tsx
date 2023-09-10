import {legacy_createStore as createStore ,compose  } from 'redux';
import rootReducer from './reducers/index';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(),
);
export type RootState = ReturnType<typeof store.getState>; 

export default store;