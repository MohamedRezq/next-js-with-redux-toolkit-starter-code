import { combineReducers } from 'redux'

import count from './count/countSlice'
import users from './users/usersSlice'

const reducers = combineReducers({ 
  count,
  users
})

export default reducers;