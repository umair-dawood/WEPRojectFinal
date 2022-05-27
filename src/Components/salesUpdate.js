import ChildUpdate from "./childUpdate";
import React, {useState} from 'react';
import {useEffect} from "react";

import {connect} from 'react-redux';
import * as actions from '../actions/pos';
import './Sales_preview.css'




function SalesUpdate(props){


const[update,setUpdate] = useState();

    useEffect(() => {
        actions.TableString.StringOfTable="BillMaster_POS";
        console.log('Updating Sales_preview')
        props.fetchAllPos();
    },);




    return(<div style={{paddingLeft:"40px"}}>
        <h1>Edit Sales</h1>
        
        {props.poslist.map((record, index) => {
            return (
        <ul className="list-group" key={index} style={{"background":"transparent"}}>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={{"background":"transparent"}}>
                {record.BillCreatedOn}{" "}
                {record.BillCreatedBy}{" "}
                {record.CustomerName}{" "}
                {record.CustomerPhoneNumber}{" "}
                {record.CustomerAddress}{" "}
                {record.totalAmount}{" "}
            </li>
        </ul>
        
        );
    })}
    <ChildUpdate props={setUpdate(update)}/>
    </div>);
}



const mapStateToProps = state=>({
    poslist: state.pos.list  
})

const mapActionToProps =  {
fetchAllPos: actions.fetchall
}

export default connect(mapStateToProps,mapActionToProps)(SalesUpdate);
