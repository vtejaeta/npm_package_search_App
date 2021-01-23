import { Provider } from 'react-redux'
import { store } from '../redux'
import RepositoriesList from './RepositoriesList'

const App = () => {
  return (
      <Provider store={store}>
          <div>
            <h1>Search for Package</h1>
            <RepositoriesList/>
          </div>
      </Provider>
  )
}

export default App
