import React from 'react';
import {useEffect} from "react";
import './forms.scss'
import {connect} from 'react-redux';
import * as actions from '../actions/pos';
import './Sales_preview.css'
import {Table} from 'react-bootstrap'





export var reRender={reRender:""}


function SalesPreview(props){


    useEffect(() => {
        actions.TableString.StringOfTable="StockDetails";
        console.log('Updating Sales_preview')
        props.fetchAllPos();
    }, []);


    return(
        <div  className="table1" style={{"background":"transparent","paddingLeft":"30px"}}>
            <Table striped bordered hover variant="dark" style={{margin:'30px'}}>
                    <thead>
                <tr>
                    <th>#</th>
                    <th>Location</th>
                    <th>SKU</th>
                    <th>Quantity</th>
                    <th>Purchase Price</th>
                    <th>Date Stock Updated</th>
                </tr>
                </thead>
            <tbody>
        {props.poslist.map((record, index) => {
            return (
            <tr>
                 <th scope="row">{index}</th>
                <td>{record.WareHouseID}</td>
                <td>{record.Item_ModelNumber}</td> 
                <td>{record.Quantity}</td>
                <td>{record.UnitPrice}</td>
                <td>{record.StockAdd_Datetime}</td>
            </tr>
           );
        })}
        </tbody>
       
        </Table>
        </div>
    );
}


const mapStateToProps = state=>({
        poslist: state.pos.list  
})

const mapActionToProps =  {
    fetchAllPos: actions.fetchall
}

export default connect(mapStateToProps,mapActionToProps)(SalesPreview);
