import React from 'react'
import ReactDOM from 'react-dom/client'

import CV from './App'
import data from './data'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CV {...data}/>
  </React.StrictMode>
)

reportWebVitals()
