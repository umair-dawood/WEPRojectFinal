import React from "react";
import Sales from "./Sales";
import SalesMaster from "./sales_master";
import './SalesParent.css'
import SalesPreview from "./Sales_preview";
import Preview from './preview'
import Add from "./Add";

function Salesparent(props) {


  

    return (<div  className-="div" style={{paddingLeft:"8vw"}}>
    
        <div className-="div" id="parent" className="rowC"> <Add className="Sales"/></div>
             <div className-="div" ><SalesMaster/></div>
    </div>);

}


export default Salesparent;