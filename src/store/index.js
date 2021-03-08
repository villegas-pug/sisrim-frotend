import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import beneficiarioReducer from 'store/reducers/beneficiarioReducer'

const reducers = combineReducers({
   beneficiario: beneficiarioReducer,
})

export default createStore(
   reducers,
   compose(
      applyMiddleware(thunk),
      devToolsEnhancer()
   )
)