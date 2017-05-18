import {combineReducers} from 'redux';
import configuration from './configuration';
import game from './game';

export default combineReducers({configuration, game});
