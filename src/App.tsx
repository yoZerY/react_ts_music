import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppHeader from './components/Header'
import AppFooter from './components/Footer'
import routes from './router'

function App() {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <Suspense fallback="loading...">
        <div className="app-main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter></AppFooter>
    </div>
  )
}

export default App
