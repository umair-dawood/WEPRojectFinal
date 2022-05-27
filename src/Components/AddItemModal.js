import './forms.scss';
import WareHouse from "./WareHouse";





function AddItemModal(props){
    return(
      <>
        <button type="button" className="btn btn-primary submit-btn" data-toggle="modal" data-target="#exampleModal">
  Add New Product</button>
        <div id="exampleModal" className="modal" tabindex="-1" role="dialog">
      
      <div className="modal-body ">
        <WareHouse />
      </div>
      
     
</div>
</>
    );

}
export default AddItemModal