import React, {useState} from 'react';
import './forms.scss'
import {connect} from 'react-redux';
import * as actions from '../actions/pos';
import * as Sales_preview from './preview';






function Sales(props) {
   

   const [active, setActive] = useState(0);
   const [filtered, setFiltered] = useState([]);
   const [isShow, setIsShow] = useState(false);
   const [input, setInput] = useState("");

    const saved = localStorage.getItem("username");
    
   
   

   const onChange = e => {
     const  suggestions  = ["123","456"];
     const input = e.currentTarget.value;
     const newFilteredSuggestions = suggestions.filter(
       suggestion =>
         suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
     );
     setActive(0);
     setFiltered(newFilteredSuggestions);
     setIsShow(true);
     setInput(e.currentTarget.value)
   };
 const onClick = e => {
     setActive(0);
     setFiltered([]);
     setIsShow(false);
     setInput(e.currentTarget.innerText)
   };
 const onKeyDown = e => {
     if (e.keyCode === 13) { 
       setActive(0);
       setIsShow(false);
       setInput(filtered[active])
     }
     else if (e.keyCode === 38) { 
       return (active === 0) ? null : setActive(active - 1);
     }
     else if (e.keyCode === 40) { 
       return (active - 1 === filtered.length) ? null : setActive(active + 1);
     }
   };
 const renderAutocomplete = () => {
     if (isShow && input) {
       if (filtered.length) {
         return (
           <ul className="autocomplete">
             {filtered.map((suggestion, index) => {
               let className;
               if (index === active) {
                 className = "active";
               }
               return (
                 <li className={className} key={suggestion} onClick={onClick}>
                   {suggestion}
                 </li>
               );
             })}
           </ul>
         );
       } else {
         return (
           <div className="no-autocomplete">
             <em>Not found</em>
           </div>
         );
       }
     }
     return <></>;
   }
   
   const intialvalues={

      ItemBrand:'Haier',
      ItemType:'AC',
      ItemSKU:'',
      ItemQuatity:'',
      ItemPrice:'',
      SalesmanName:''
   }
   const [values,setValues] = useState(intialvalues);

   const handleSubmit =e=>{
    actions.TableString.StringOfTable="Bill_Child_Temp";

      setValues(values.ItemSKU=input)
      setValues(values.SalesmanName=saved)
      console.log(input)
      e.preventDefault();
      console.log(values);
      props.createPos(values,()=>{})
      window.alert("Product Added")
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
      <div className="container">

         <section className="pos">
   <h1 className="title">Point Of Sales Terminal</h1>
   <form className="contact-form row" onSubmit={handleSubmit}>
   
   <div className="form-field col-lg-6">
    <label className="label" for="Supplier" style={{marginBottom:"20px"}}>Supplier</label>
   <select name="ItemBrand" id="comp" onChange={handleInputChange} value={values.ItemBrand}>
        <option value="Haier">Haier</option>
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
      <input className="input-text js-input"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
        <label className="label" for="Number">Product SKU</label>
      {renderAutocomplete()}

      </div>    
      
      <div className="form-field col-lg-6 ">
         <input name="ItemQuatity" onChange={handleInputChange} value={values.ItemQuatity} id="ItemQuatity" className="input-text js-input" type="Number" required/>
         <label className="label" for="Number">ItemQuatity</label>
      </div>

     
      
      
      <div className="form-field col-lg-6 ">
         <input name="ItemPrice" onChange={handleInputChange} value={values.ItemPrice} id="Price" className="input-text js-input" type="Amount"  />
         <label className="label" for="Amount">Price</label>
      </div>
         
      
      <div className="form-field col-lg-12">
         <input  className="submit-btn" type="submit" value="Add Product"/>
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
      deletePos: actions.Delete
      
      
   }
   
   export default connect(mapStateToProps,mapActionToProps)(Sales);