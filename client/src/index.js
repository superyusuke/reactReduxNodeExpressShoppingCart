import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import logger from 'redux-logger'
import './index.css';
import App from './App';
import rootReducer from './reducers';
import {postBooks} from './actions/bookActions';
import {updateBook} from './actions/bookActions';
import {deleteBook} from './actions/bookActions';
import {addToCart} from './actions/cartActions';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger),
));

store.subscribe(() => console.log(store.getState()));

const testBooks = [
  {
    id: 1,
    title: 'title1',
    description: 'description1',
    price: 33,
  },
  {
    id: 2,
    title: 'title2',
    description: 'description2',
    price: 60,
  },
];

store.dispatch(postBooks(testBooks));
store.dispatch(updateBook({
  id: 1,
  title: 'changed',
  price: 10000,
}));

store.dispatch(deleteBook({
  id: 1,
}));

store.dispatch(addToCart([{id: 1}]));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
