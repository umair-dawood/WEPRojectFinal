import React from 'react';
import {useEffect,useState} from "react";
import './forms.scss'
import {connect} from 'react-redux';
import * as actions from '../actions/pos';
import { faTimesCircle,faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Table} from 'react-bootstrap'



export var reRender={reRender:""}


function ItemDetails(props){
    const [currentId, setCurrentId] = useState(0)

    const intialvalues={
        ItemType:'AC',
        ModelNumber:'',
        ItemBrand:'Haier'
     }
     const [values,setValues] = useState(intialvalues);

     
     const handleSubmit =e=>{
        const onSuccess = () => {
            resetForm()
            alert("Submitted successfully")
        }
         actions.TableString.StringOfTable="itemDetails/";
       

        console.log("Now Putting into lists")
        
        e.preventDefault();
        console.log(values);

        if (currentId == 0){
                props.createPos(values,()=>{window.alert('New Product Added to Inventory')})
        }
        else{
                props.updatePos(values,currentId,onSuccess)
        }
     }
     const handleInputChange=e=>{
        const {name,value}=e.target
        setValues({
           ...values,
           [name]: value
        })
     }
   
     const resetForm = () => {
        setValues({
            ...intialvalues
        })
        setCurrentId(0)
    }
    useEffect(() => {
        actions.TableString.StringOfTable="itemDetails/";
        if (currentId != 0) {
            setValues({
                ...props.poslist.find(x => x.ModelNumber == currentId)
            })
            
        }
        console.log('Updating Sales_preview')
        props.fetchAllPos();
    }, [currentId]);


    const onDelete = id => {
        actions.TableString.StringOfTable="itemDetails/";
        if (window.confirm('Are you sure to delete this record?'))
            props.deletePos(id,()=>alert("Deleted successfully", { appearance: 'info' }))
    }


    return(
        <div style={{padding:'1px'}}>
             <section className="pos">
            <form className="contact-form row" onSubmit={handleSubmit}>
          
          
                
            <div className="form-field col-lg-6">
    <label className="label" for="Supplier" style={{marginBottom:"20px"}}>Supplier</label>
   <select name="ItemBrand" id="comp" onChange={handleInputChange} value={values.ItemBrand}>
        <option value="Haier">Hair</option>
        <option value="Anex">Anex</option>
        <option value="Dawlance">Dawlance</option>
        <option value="Samsung">Samsung</option>
        <option value="LG">LG</option>
        <option value="Hyundai">Hyundai</option>
        <option value="TCL">TCL</option>
        <option value="Sony">Sony</option>
    </select>
      </div>
      <div className="form-field col-lg-6">
        <label className="label" for="Type" style={{marginBottom:"20px"}}>Type</label>
        <select name="ItemType" id="lang" onChange={handleInputChange} value={values.ItemType}>
            <option value="AC">AC</option>
            <option value="LED">LED</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Heater">Heater</option>
            <option value="Washing">Washing Machine</option>
      </select>
      </div>
      <div className="form-field col-lg-6">
         <input name="ModelNumber" onChange={handleInputChange} value={values.ModelNumber} id="SKU" className="input-text js-input" type="text" required/>
         <label className="label" for="">Product SKU</label>
      </div>
     
      
      
      

        <div className="form-field col-lg-12">
         <input  className="submit-btn" type="submit" value="Add Products"/>
      </div>

            </form>
            
            
            </section>
        <div  className="table1">
            <Table striped bordered hover variant="dark">
                    <thead >
                <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Brand</th>
                    <th>Model Number</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                </thead>
            <tbody>
        {props.poslist.map((record, index) => {
            return (
            <tr>
                 <th scope="row">{index}</th>
                <td>{record.ItemType}</td> 
                <td>{record.ItemBrand}</td>
                <td>{record.ModelNumber}</td>
                <td><FontAwesomeIcon icon={faTimesCircle} style={{color:"red"}} id="closeButton" className="fas" onClick={() => onDelete(record.ModelNumber)}/></td>
                <td><FontAwesomeIcon icon={faEdit} style={{color:"blue"}} className="fas fa-edit " onClick={() => { setCurrentId(record.ModelNumber) }} /></td>
            </tr>
           );
        })}
        </tbody>
       
        </Table>
        </div>
        </div>
    );
}


const mapStateToProps = state=>({
        poslist: state.pos.list  
})

const mapActionToProps =  {
    fetchAllPos: actions.fetchall,
    deletePos: actions.Delete,
    updatePos: actions.update,
    createPos: actions.create
}

export default connect(mapStateToProps,mapActionToProps)(ItemDetails);
