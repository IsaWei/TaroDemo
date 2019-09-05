import {combineReducers} from 'redux'
import {LOGIN} from '../constants/user'
// 定义初始状态
const INITIAL_STATE = {
  currentUser: {}
}

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    // 根据指令处理user
    case LOGIN:
      console.log('--state.user in LOGIN--', state.user)
      return {
        ...state,
        currentUser: action.currentUser
      }
    default:
      return state
  }
}

export default combineReducers({
  user
})
