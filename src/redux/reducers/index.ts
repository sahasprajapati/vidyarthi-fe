import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { courseReducer } from './course.reducer';

const rootReducers = combineReducers({
  auth: authReducer,
  course: courseReducer,
});

export default rootReducers;
