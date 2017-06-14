import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './components/index'

const App = () => {
  return (
    <div>
      <Routes/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))