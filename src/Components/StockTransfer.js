import React from 'react';
import * as actions from '../actions/pos';
import {connect} from 'react-redux';
import {useState} from 'react';
import './forms.scss'




function StockTransfer(props){
    const intialvalues={
       ItemModelNumber:'',
       From_LocationID:'1',
       To_LocationID:'2',
       Quantity:''
     }
     const [values,setValues] = useState(intialvalues);

     
     const handleSubmit =e=>{
         actions.TableString.StringOfTable="StockTransfer";
        

        console.log("Now Putting into lists")
        console.log(actions.TableString.StringOfTable)
        e.preventDefault();
        console.log(values);
        props.createPos(values,()=>{window.alert('New Product Added to Inventory')})
     }
     const handleInputChange=e=>{
        const {name,value}=e.target
        setValues({
           ...values,
           [name]: value
        })
     }


    return(
        <div style={{paddingLeft:"10vw"}}>
            <section className="pos">
        <form className='contact-form row' onSubmit={handleSubmit} >
            <h3 className="subtitle">Stock Transfer</h3>
                <div className='form-field col-lg-6'>
            <label className='label'>From</label> 
                <select name="From_LocationID" onChange={handleInputChange} value={values.From_LocationID}>
                    <option value="1">WareHouse#1</option>
                    <option value="2">WareHouse#2</option>
                    <option value="3">Shop</option>
                </select>
                </div>

                <div className='form-field col-lg-6'>
                <label className='label'>To</label> 
                <select name="To_LocationID" onChange={handleInputChange} value={values.To_LocationID}>
                    <option value="1">WareHouse#1</option>
                    <option value="2">WareHouse#2</option>
                    <option value="3">Shop</option>
                </select>
                </div>
                <div className="form-field col-lg-6">
    <label className="label" for="Supplier" style={{marginBottom:"20px"}}>Supplier</label>
   <select name="company" id="comp">
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
        <select name="languages" id="lang">
            <option value="AC">AC</option>
            <option value="LED">LED</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Heater">Heater</option>
            <option value="Washing">Washing Machine</option>
      </select>
      </div>
      <div className="form-field col-lg-6">
         <input name="ItemModelNumber" value={values.ItemModelNumber} onChange={handleInputChange} id="SKU" className="input-text js-input" type="text" required/>
         <label className="label" for="">Product SKU</label>
      </div>
      <div className='form-field col-lg-6'>
            <input name="Quantity" value={values.Quantity} onChange={handleInputChange} id="Quantity" className="input-text js-input" type="number" required/>
            <label className="label" for=''>Quantity</label>
        </div>
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Update Warehouse"/>
      </div>
            </form>
            </section>
            </div>
    );
}

  const mapStateToProps = state=>({
     poslist: state.pos.list  
  })
  
  const mapActionToProps =  {
  createPos: actions.create,


  }

export default connect(mapStateToProps,mapActionToProps)(StockTransfer);