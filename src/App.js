import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import './App.css'
import SideNav from './Components/SideNav';
import WareHouse from './Components/WareHouse'
import StockTransfer from './Components/StockTransfer';



function App() {
  return (
    <>
    <SideNav />
    <WareHouse />
    <StockTransfer />
      <nav style={{borderBottom: "solid 1px",paddingBottom: "1rem", color:"white"}}>
        <Link to="/Salesparent" style={{color:"white"}}>Salesparent</Link>
        <Link to="/WareHouse" style={{color:"white"}}>WareHouse</Link>
        
      </nav>
      <Outlet />
</>

  );
}

export default App;
