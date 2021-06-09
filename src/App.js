import React from 'react';
import HomeManagement from './views/HomeManagement/HomeManagement';
import ReservationManagement from './views/ReservationManagement/ReservationManagement';

import 'antd/dist/antd.css';
import './App.css';


function App(props) {

  return (
    <div>
      <HomeManagement />
      <ReservationManagement />
    </div>
  )

}



export default App;
