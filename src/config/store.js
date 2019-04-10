import {createStore} from 'redux'
import getInfo from './reducers'



const store = createStore(
    getInfo,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store