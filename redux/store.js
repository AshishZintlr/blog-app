import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';

// const store = createStore(rootReducer);

// export default store;


let store;

if (typeof window !== 'undefined') {
    // Client-side-only code
    store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
    // Server-side code
  store = createStore(rootReducer);
}
    export default store;