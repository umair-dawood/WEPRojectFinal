import WareHouse from "./WareHouse"
import StockTransfer from "./StockTransfer"
import Sales_preview from "./Sales_preview"
import './forms.scss'

function WareHouseParent(){
    return(<div>
        <h1  style={{paddingLeft:"10vw"}}className="title" >Warehouse Management</h1>
        <WareHouse/>
        <br/>
        <StockTransfer/>
        <br/>
        <Sales_preview/>
    </div>)
}
export default WareHouseParent