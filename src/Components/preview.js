import React from 'react';
import {useEffect,useState} from "react";
import './forms.scss'
import {connect} from 'react-redux';
import * as actions from '../actions/pos';
import './Sales_preview.css'



export var reRender={reRender:""}


function Preview(props){

   
    const temp=localStorage.getItem("username");
    


    useEffect(() => {
        actions.TableString.StringOfTable="Bill_Child_Temp/"+temp;
        console.log('Updating Sales_preview')
        props.fetchAllPos();
    }, [reRender.reRender]);

    const onDelete = id => {
        actions.TableString.StringOfTable="Bill_Child_Temp/";
        if (window.confirm('Are you sure to delete this record?'))
            props.deletePos(id,()=>alert("Deleted successfully", { appearance: 'info' }))
    }
    

    return(
        <div className="table1" style={{"background":"transparent"}}>
            {console.log(props.poslist)}
        {props.poslist.map((record, index) => {
            return (<ul className="list-group" key={index} style={{"background":"transparent"}}>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={{"background":"transparent"}}>
              {record.ItemBrand}{" "}
                {record.ItemType}{" "}
                {record.ItemSKU}{" "}
                {"Quantity : "}{record.ItemQuantity}{" "}
                <span className="badge bg-primary rounded-pill">{record.ItemQuantity * record.ItemPrice}{" PKR"}</span>
                <a style={{color:"red"}} id="closeButton" className="fas fa-times-circle" onClick={() => onDelete(record.ItemSKU)}></a>
                </li>
            </ul>);
        })}
        </div>
    );
}


const mapStateToProps = state=>({
        poslist: state.pos.list  
})

const mapActionToProps =  {
    fetchAllPos: actions.fetchall,
    deletePos: actions.Delete
}

export default connect(mapStateToProps,mapActionToProps)(Preview);