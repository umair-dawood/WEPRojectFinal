import React from 'react';
import {useEffect} from "react";
import './forms.scss'
import {connect} from 'react-redux';
import * as actions from '../actions/pos';
import './Sales_preview.css'



function ChildUpdate(props){




    useEffect(() => {
        actions.TableString.StringOfTable="BillChild_POS";
        console.log('Updating Sales_preview')
        props.fetchAllPos();
        

    },);




    return(<div style={{paddingLeft:"20px"}}>
        <h1>Edit Sales</h1>
        
        {props.poslist1.map((record, index) => {
            return (
        <ul className="list-group" key={index} style={{"background":"transparent"}}>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={{"background":"transparent"}}>
                {record.ItemSkU}{" "}
                {record.ItemBrand}{" "}
                {record.ItemType}{" "}
                {record.ItemPrice}{" "}
                {record.ItemQuantity}{" "}
            </li>
        </ul>
        
        );
        })}
    </div>);
}



const mapStateToProps = state=>({
    poslist1: state.pos.list  
})

const mapActionToProps =  {
fetchAllPos: actions.fetchall
}

export default connect(mapStateToProps,mapActionToProps)(ChildUpdate);
