import React from 'react'
import ReactDOM from 'react-dom/client'
import InputComponent from './Input.jsx'
import Count from './Count.jsx'
import Timer from './Timer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InputComponent />
    <Count />
    <br></br>
    <br></br>
    <Timer />
  </React.StrictMode>,
)
