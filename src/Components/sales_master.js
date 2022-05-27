import React, {useState} from 'react';
import './forms.scss'
import {connect} from 'react-redux';
import * as actions from '../actions/pos';
import PrintInvoice from './PrintInvoice'
import * as Sales_preview from './Sales_preview';





function SalesMaster(props) {
   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

   const temp=localStorage.getItem("username");
   
    const initial={
       SaleType:"Normal",
         BillCreatedBy:temp,
        BillCreatedOn:date,
        CustomerName:'',
        CustomerCNIC:'',
        CustomerAddress:'',
        DeliveryCharges:'',
        InstallationChares:0,
    }

    const [values,setValues] = useState(initial);
    const [method,setMethod]=useState(["Bank Transfer"]);
    const [change,setChange]=useState(0);
    const [price,setPrice]=useState(0);
    const [amount,setAmount]=useState(0);
    const changes=amount-price;
    
    const handleAdvance=e=>{
      if(window.confirm("Give Product on Advance?"))
      {
         window.alert("OK")
      }
      else{
         window.alert("cancel")
      }
      
   }
    
    console.log(changes);
    //setChange(amount-price);
    console.log(method);
 
    const handleSubmit =e=>{
       console.log("Now Putting into lists");
       e.preventDefault();
       console.log(values);
       actions.TableString.StringOfTable="BillMaster_POS";
       props.createPos(values,()=>{window.alert('New Sale Completed')});
       Sales_preview.reRender.reRender+=1

    }
    const handleInputChange=e=>{
       const {name,value}=e.target
       setValues({
          ...values,
          [name]: value
       })
    }
 
     return (
       <div className="Sales_master">
          <section className="pos">
    <h1 className="title">CheckOut</h1>
    <form className="contact-form row" onSubmit={handleSubmit}>
    <div className="form-field col-lg-6">

          <a name="BillCreatedBy"   id="posName" className="input-text js-input">SalesMan = {temp}</a>
          <label className="label" for="">POS Employee Name</label>
       </div>

       <div className="form-field col-lg-6 ">
          <input name="CustomerName" value={values.CustomerName} onChange={handleInputChange}  id="Customer" className="input-text js-input" type="text" required/>
          <label className="label" for="company">Customer Name</label>
       </div>

        <div className="form-field col-lg-6 ">
          <input name="CustomerCNIC" value={values.CustomerCNIC} onChange={handleInputChange}  id="phone" className="input-text js-input" type="text" required/>
          <label className="label" for="phone">Contact Number</label>
       </div>

       <div className="form-field col-lg-6 ">
            <input name="DeliveryCharges" value={values.DeliveryCharges} onChange={handleInputChange}  id="Delivery" className="input-text js-input" type="Quantity" />
            <label className="label" for="Delivery">Delivery Charges</label>
       </div>

       <div className="form-field col-lg-6 ">
       <input name="InstallationChares" value={values.InstallationChares} onChange={handleInputChange}  id="Installation" className="input-text js-input" type="Quantity" />
          <label className="label" for="Installation">Installation Charges</label>
       </div>
       <div className="form-field col-lg-6 ">
       <input name="BillCreatedOn" value={values.BillCreatedOn} onChange={handleInputChange}  id="billDate" className="input-text js-input" type="Date" />
          <label className="label">BILL DATE</label>
       </div>
       <div className="form-field col-lg-6 ">
          <label className="label" for="payment">Payment Method</label>
          <select className="form-select" name="Payment" id="pay" value={method} onChange={e=>setMethod(e.target.value)}  >
         <option value="Bank Transfer">Bank Transfer</option>
         <option value="Cheque">Cheque</option>
         <option value="Cash">Cash</option>
     </select>
     </div>
     
     <div>
         {
           method === 'Bank Transfer' ? (
       <div>
          <form className="contact-form row">
          <div className="form-field col-lg-6">
             <input name="bName"   id="Bank" className="input-text js-input" type="text" required/>
             <label className="label" for="Bank">Bank Name</label>
          </div>
          <div className="form-field col-lg-6">
             <input name="aNumber"  id="Bank" className="input-text js-input" type="Number" required/>
             <label className="label" for="Bank">Bank Account Number</label>
          </div>
          </form>
       
       </div>
       
           ) : method === 'Cheque' ? (
             <div>   
                <div>
             <form className="contact-form row">
             <div className="form-field col-lg-6">
                <input name="bName"   id="Cheque" className="input-text js-input" type="text" required/>
                <label className="label" for="Bank">Bank Name</label>
             </div>
             <div className="form-field col-lg-6">
                <input name="chNumber"   id="Cheque" className="input-text js-input" type="Number" required/>
                <label className="label" for="Bank">Cheque Number</label>
             </div>
             </form>
          
          </div></div>
           ) : method === 'Cash' ? (
             
                <div>
             <form className="contact-form row">
            <div className="form-field col-lg-6">
               <input name="Amount"   id="Cash" className="input-text js-input" type="text" onChange={e=>setAmount(e.target.value)} required/>
               <label className="label" for="Bank">Amount</label>
            </div>
            
            <div className="form-field col-lg-6 ">
               <label className="label" for="Change">Change: {changes} PKR</label>
            </div>
            </form>
            </div>
           
           ) : null
         }
       </div>
       <div className="form-field col-lg-6 ">
          <label className="label" for="payment">Sale Type</label>
          <select className="form-select" name="Type" id="pay" value={values.SaleType} onChange={handleInputChange}  >
         <option value="Normal">Normal</option>
         <option value="Credit">Credit</option>
         
     </select>
     </div>
       
       <div className="form-field col-lg-12">
          <input name="CustomerAddress" value={values.CustomerAddress} onChange={handleInputChange}   id="Address" className="input-text js-input" type="text" required/>
          <label className="label" for="Address">Address</label>
       </div>
       <div className="form-field col-lg-12">
      </div>
       <div className="form-field col-lg-12">
          <input  className="submit-btn" type="submit" value="Make Sale"/>
       </div>
       <PrintInvoice />
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
   
   export default connect(mapStateToProps,mapActionToProps)(SalesMaster);
   
 
 