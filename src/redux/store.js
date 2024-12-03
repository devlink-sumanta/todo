import { applyMiddleware, compose, createStore } from "redux"
import reducers from "./reducers"
import { thunk } from 'redux-thunk';

const middlewares = [thunk];

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const enhancers = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(reducers, enhancers);

export default store