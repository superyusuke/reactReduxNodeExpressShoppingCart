import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import BookList from './components/pages/BookList';
import rootReducer from './reducers';
import {postBooks} from './actions/bookActions';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger),
));

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
  {
    id: 3,
    title: 'title3',
    description: 'description3',
    price: 100,
  },
  {
    id: 4,
    title: 'title4',
    description: 'description4',
    price: 260,
  },
];

store.dispatch(postBooks(testBooks));

ReactDOM.render(
    <Provider store={store}>
      <BookList/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
