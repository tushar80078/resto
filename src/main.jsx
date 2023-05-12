import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router'
import { RouterProvider } from 'react-router'
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  
)
