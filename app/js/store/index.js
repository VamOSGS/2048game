import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        reducer, 
        composeWithDevTools(applyMiddleware(thunk)
    ));
  
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers/index');
        store.replaceReducer(nextRootReducer);
      });
    }
  
    return store;
  }