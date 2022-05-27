import React from 'react';
import * as actions from '../actions/pos';
import {connect} from 'react-redux';
import {useState} from 'react';
import './forms.scss'
import { ToastContainer,toast } from 'react-toastify';


function WareHouse(props){
   
    const intialvalues={
        ItemBrand:'Haier',
        ItemType:'AC',
        Item_ModelNumber:'',
        Quantity:'',
        WareHouseID:'1',
        UnitPrice:''
     }
     const [values,setValues] = useState(intialvalues);

     
     const handleSubmit =e=>{
         actions.TableString.StringOfTable="StockDetails";

        console.log("Now Putting into lists")
        
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
            <form className="contact-form row" onSubmit={handleSubmit}>
            <h3 className="subtitle">Add New items in stock</h3>
            <div className="form-field col-lg-6">
                
            <label className="label">Location</label> 
                <select name="WareHouseID" onChange={handleInputChange} value={values.WareHouseID}>
                        
                    <option value="1">WareHouse#1</option>
                    <option value="2">WareHouse#2</option>
                    <option value="3">Shop</option>
                </select>
                </div>
                
      
      <div className="form-field col-lg-6">
         <input name="Item_ModelNumber" onChange={handleInputChange} value={values.Item_ModelNumber} id="SKU" className="input-text js-input" type="text" required/>
         <label className="label" for="">Product SKU</label>
      </div>
      <div className='form-field col-lg-6'>
            <input name="Quantity" onChange={handleInputChange} value={values.Quantity} id="Quantity" className="input-text js-input" type="number" required/>
            <label className="label" for=''>Quantity</label>
        </div>

        <div className="form-field col-lg-6">
         <input name="UnitPrice" onChange={handleInputChange} value={values.UnitPrice} id="Cost" className="input-text js-input" type="Number"  required/>
         <label className="label" for="Number">Product Cost</label>
      </div>

        <div className="form-field col-lg-12">
         <input  className="submit-btn" type="submit" value="Add Products"/>
      </div>

            </form>
            
            
            </section>
            <ToastContainer />
        </div>
    );
}

actions.TableString.StringOfTable="StockDetails";

  const mapStateToProps = state=>({
     poslist: state.pos.list  
  })
  
  const mapActionToProps =  {
  createPos: actions.create,


  }

export default connect(mapStateToProps,mapActionToProps)(WareHouse);
