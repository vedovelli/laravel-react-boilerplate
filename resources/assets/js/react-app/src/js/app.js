
import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/Dashboard'
import Categorias from './components/Categorias'

const dashboard = document.getElementById('dashboard')
const categorias = document.getElementById('categorias')

if (dashboard) {
  ReactDOM.render(<Dashboard/>, document.getElementById('dashboard'))
}

if (categorias) {
  ReactDOM.render(<Categorias/>, document.getElementById('categorias'))
}

