import { combineReducers } from 'redux'
import repositoriesReducer from './repositoriesReducer'

// combine all reducers
const reducers = combineReducers({
  repositories: repositoriesReducer,
})

export default reducers
