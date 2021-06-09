import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.js'
import 'antd/dist/antd.css';
import './App.css';
function App(props) {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  )
}
export default App;