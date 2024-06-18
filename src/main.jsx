import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from './context/user.jsx'
import ConversatioProvider from './context/conversation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <ConversatioProvider>
      <App />
    </ConversatioProvider>
  </UserProvider>



)
