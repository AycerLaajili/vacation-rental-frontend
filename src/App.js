import React from 'react';
import HomeManagement from './views/HomeManagement/HomeManagement';
import ReservationManagement from './views/ReservationManagement/ReservationManagement';
import MainLayout from './layout/MainLayout.js'
import 'antd/dist/antd.css';
import './App.css';
function App(props) {
  return (
    <div>
      {/* <HomeManagement />
      <ReservationManagement /> */}
      <MainLayout />
    </div>
  )
}
export default App;