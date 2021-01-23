import { useDispatch } from 'react-redux'
import { actionCreators } from '../redux'
import { bindActionCreators } from 'redux'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actionCreators, dispatch)
  // something like - {searchRepositories:dispatch(searchRepositories)}
}
