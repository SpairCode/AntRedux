import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/todolist';
const composeHancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}):compose

const enhancer = composeHancers(applyMiddleware(thunk))

const store = createStore(
  reducer,
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store