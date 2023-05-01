import { combineReducers } from 'redux'
import diaryReducer from './diary'

// import stuff from './stuff'

export default combineReducers({
  diary: diaryReducer,
})
