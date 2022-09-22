import React from 'react';
import { Routes,Route} from 'react-router-dom';
// import Home from "./HomeComponents/HomeComponent";
import Home from "./HomeComponent/HomeComponent";
import AddMoney from "./AddMoneyComponent/AddMoneyComponent";

function MainComponent() {
  return (
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/addmoney" element={<AddMoney/>} />
      </Routes>
  )
}

export default MainComponent;