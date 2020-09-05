import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import navReduser from './navReduser';
import muzReduser from './MuzikReduser';
import usersReduser from './usersReduser';
import authReduser from './auth_reduser';
import thunkMidleware from 'redux-thunk';

let redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  navigation: navReduser,
  muzik: muzReduser,
  usersPage: usersReduser,
  auth: authReduser,
});

let store = createStore(redusers, applyMiddleware(thunkMidleware));

export default store;
