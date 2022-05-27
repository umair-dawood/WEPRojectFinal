import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/pos';
import {useEffect,useState} from 'react';
import './forms.scss'


function Expenses(props){
    const intialvalues={
        TransactionDate:"",
        CreatedBy:"",
        CreditAccount:"",
        CreditAmount:"",
        DebitAccount:"",
        DebitAmount:"",
        Narration:""
     }
     const [values,setValues] = useState(intialvalues);

     useEffect(() => {
        actions.TableString.StringOfTable="ItemDetails";
        console.log('Updating Account')
        props.fetchAllPos();
    }, );


     const handleSubmit =e=>{
         actions.TableString.StringOfTable="DoubleEntryMaster";


        console.log("Now Putting into lists")
        
        e.preventDefault();
        console.log(values);
        props.createPos(values,()=>{window.alert('New Expense Added')})
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
                <h1 className="title">Expenses Management</h1>
            <form className="contact-form row" onSubmit={handleSubmit}>
            <h3 className="subtitle">Misc Expenses</h3>
            <div className="form-field col-lg-6">
                
            <label className="label">Credit Account</label> 
            <select
  required
  className="form-control"
  value={values.CreditAccount}
  name="CreditAccount"
  onChange={handleInputChange} > 
      {
          props.poslist.map((record,index) => {
              return (<option key={index} value={record.ItemBrand}>{record.ItemBrand} </option>)})
      }
</select>
                </div>

                <div className="form-field col-lg-6">
         <input name="CreditAmount" onChange={handleInputChange} value={values.CreditAmount} id="credit" className="input-text js-input" type="number" required/>
         <label className="label" for="">Credit Amount</label>
      </div>
      
                <div className="form-field col-lg-6">
                
            <label className="label">Debit Account</label> 
            <select 
  required
  className="form-control"
  value={values.DebitAccount}
  name="DebitAccount"
  onChange={handleInputChange} > 
      {
          props.poslist.map((record,index) => {
              return <option
                  key={index}
                  value={record.ItemBrand}>{record.ItemBrand}
                  </option>;
          })
      }
</select>
                </div>
      
      
      <div className='form-field col-lg-6'>
            <input name="DebitAmount" onChange={handleInputChange} value={values.DebitAmount} id="Debit" className="input-text js-input" type="number" required/>
            <label className="label" for=''>Debit Amount</label>
        </div>

        <div className="form-field col-lg-6">
         <input name="TransactionDate" onChange={handleInputChange} value={values.TransactionDate} id="Cost" className="input-text js-input" type="Date"  required/>
         <label className="label" for="Number">Transaction Date</label>
      </div>

      <div className="form-field col-lg-12">
          <input name="Narration" value={values.Narration} onChange={handleInputChange}   id="Narration" className="input-text js-input" type="text" required/>
          <label className="label" for="Address">Details</label>
       </div>

        <div className="form-field col-lg-12">
         <input  className="submit-btn" type="submit" value="Add Expense"/>
      </div>

            </form>
            
            
            </section>

        </div>
    );
}

actions.TableString.StringOfTable="StockDetails";

  const mapStateToProps = state=>({
     poslist: state.pos.list  
  })
  
  const mapActionToProps =  {
  createPos: actions.create,
  fetchAllPos: actions.fetchall


  }

export default connect(mapStateToProps,mapActionToProps)(Expenses);
