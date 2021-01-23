import axios from 'axios'
import {Dispatch} from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const searchRepositories = (searchTerm: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    })

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: searchTerm,
          },
        }
      )

      const names = data.objects.map((result) => {
        return result.package.name
      })

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      })
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      })
    }
  }
}
