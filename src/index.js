
import React from 'react'
import ReactDOM from 'react-dom'

import 'moment/locale/es'
import 'antd/dist/antd.css'

import AppRoutes from 'routes/AppRouter';

import { Provider } from 'react-redux'
import store from 'store'

import './style.css'

require('dotenv').config()

ReactDOM.render(
   <Provider store={store}>
      <AppRoutes />
   </Provider>,
   document.getElementById('root')
)