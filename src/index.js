import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SideNav from './Components/SideNav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {store} from "./actions/store";
import { Provider } from "react-redux";
import Salesparent from './Components/Salesparent';
import Salary from './Components/salary';
import Expenses from './Components/Expenses';
import StockTransfer from './Components/StockTransfer';
import WareHouseParent from './Components/wareHouseParent';
import AddItemModal from './Components/AddItemModal'
import ItemDetails from './Components/itemDetails'
import Settings from './Components/Settings'


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<SideNav />}>
        
        <Route path="Salesparent" element={<Salesparent/>}/>
        <Route path="Warehouse" element={<WareHouseParent />}/>
        
        <Route path="Salary" element={<Salary/>}/>
        <Route path="updatesales" element={<AddItemModal />}/>
        <Route path="Expenses" element={<Expenses/>}/>
        <Route path="ItemDetails" element={<ItemDetails/>}/>
        <Route path="Settings" element={<Settings/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
