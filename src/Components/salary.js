import React from "react";
import './forms.scss'





function salary(){
 



return(
<div style={{paddingLeft:"10vw"}}>
    <section className='pos'>
        <h1 className='title'>Update Employee Salary Data</h1>

                
    <h4>Add New Employee</h4>
        <form className='contact-form row'>

                <div className="form-field col-lg-6">
                    <input id="Name" className="input-text js-input" type="text" required/>
                    <label className="label" for="">Name</label>
                </div>

                <div className='form-field col-lg-6'>
                    <input id="CNIC" className="input-text js-input" type="text" required/>
                    <label className="label" for=''>CNIC</label>
                </div>

                <div className='form-field col-lg-6'>
                    <input id="Age" className="input-text js-input" type="Quantity" required/>
                    <label className="label" for=''>Age</label>
                </div>

                <div className='form-field col-lg-6'>
                    <input id="Role" className="input-text js-input" type="text" required/>
                    <label className="label" for=''>Role</label>
                </div>

                <div className='form-field col-lg-6'>
                    <input id="PayRole" className="input-text js-input" type="date" required/>
                    <label className="label" for=''>Pay Roll Date</label>
                </div>

                <div className='form-field col-lg-6'>
                    <input id="Salary" className="input-text js-input" type="Quantity" required/>
                    <label className="label" for=''>Salary</label>
                </div>

                <div className="form-field col-lg-12">
                    <input className="submit-btn" type="submit" value="Add Employee"/>
                </div>
        </form>
            
        <h4>Advanced Salary</h4>
            <form className='contact-form row'>
                        
                <div className='form-field col-lg-6'>
                    <input id="CNIC" className="input-text js-input" type="text" required/>
                    <label className="label" for=''>CNIC</label>
                </div>
                <div className='form-field col-lg-6'>
                    <input id="AdvanceDate" className="input-text js-input" type="date" required/>
                    <label className="label" for=''>Advanced Date</label>
                </div>
                <div className='form-field col-lg-6'>
                    <input id="Advance Amount" className="input-text js-input" type="Quantity" required/>
                    <label className="label" for=''>Advance Amount</label>
                </div>

                <div className="form-field col-lg-14">
                    <input className="submit-btn" type="submit" value="Update"/>
                </div>

            </form>
    </section>
</div>
)
}
export default salary;