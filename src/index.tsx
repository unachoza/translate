import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

interface MyState {
    language: string
}

ReactDOM.render(<App/>, document.querySelector('#root'))