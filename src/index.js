import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyB3Viex39qTaE3jhC7z0-whe9y71m5oi34',
  authDomain: 'coderhouse-ecommerce-2298b.firebaseapp.com',
  projectId: 'coderhouse-ecommerce-2298b',
  storageBucket: 'coderhouse-ecommerce-2298b.appspot.com',
  messagingSenderId: '504822857402',
  appId: '1:504822857402:web:c182d8ba94c21481e70c83',
}

const app = initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
