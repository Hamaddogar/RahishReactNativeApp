import { createStore, combineReducers,compose } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducer
});

 let composeEnhenders=compose
 if(__DEV__)
 {
    composeEnhenders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose


 }
const configureStore = () => {
    return createStore(rootReducer,composeEnhenders());
};

export default configureStore;