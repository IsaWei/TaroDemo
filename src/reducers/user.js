import {CURRENT_USER} from '../constants/user'
// 定义初始状态
const INITIAL_STATE = {
  currentUser: {}
}

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    // 根据指令处理user
    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }
    default:
      return state
  }
}

export default user
