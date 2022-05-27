import React, { useState, useEffect } from "react";
import AddItemModal from "./AddItemModal";
import "./forms.scss";
import { connect } from "react-redux";
import * as actions from "../actions/pos";
import { Table } from "react-bootstrap";
const products = [];

var tableRowIndex = 0;



//TableRow
function TableRow({ row, handleDataChange, deleteRow }, props) {





  const [ItemQuantity, handleChangeItemQuantity] = useState(1);
  const [ItemSKU, handleChangeItemSKU] = useState(row.ItemSKU);
  const [ItemPrice, handleChangeItemPrice] = useState(row.ItemPrice);
  const index = row.index;

  const updateValues = (e) => {
    var inputName = e.target.name;
    var inputValue = e.target.value;
    switch (inputName) {
      case "ItemQuantity":
        handleChangeItemQuantity(inputValue);
        break;
      case "ItemPrice":
        handleChangeItemPrice(inputValue);
        break;
      case "ItemSKU":
        handleChangeItemSKU(e.currentTarget.value);
        break;

      default:
        break;
    }

  };


  const removeRow = () => {
    deleteRow(index);
  };

  useEffect(() => {

    console.log(index);
    handleChangeItemSKU(products[row.index - 1])
    handleDataChange({
      index: index,
      ItemQuantity: ItemQuantity,
      ItemSKU: ItemSKU,
      ItemPrice: ItemPrice,
    });

  }, [ItemQuantity, ItemPrice, ItemSKU, products], [])
  let product = ItemPrice * ItemQuantity;
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <div className="form-field col-lg-6">
          <input
            name="ItemSKU"
            defaultValue={ItemSKU}

            onChange={(e) => updateValues(e)}
            id="ItemSKU"
            className="input-text js-input"
            type="text"
            required
          />
        </div>
      </td>
      <td>
        <div className="form-field col-lg-6 ">
          <input
            name="ItemQuantity"
            onChange={(e) => updateValues(e)}
            id="ItemQuantity"
            className="input-text js-input"
            type="Number"
            defaultValue={ItemQuantity}
            required
          />
        </div>
      </td>
      <td>
        <div className="form-field col-lg-6 ">
          <input
            name="ItemPrice"
            onChange={(e) => updateValues(e)}
            id="ItemPrice"
            className="input-text js-input"
            type="Amount"
            required
          />
        </div>
      </td>
      <td>
        {product}
        {" PKR"}

      </td>
      <td>
        <button type="button" className="btn btn-remove" onClick={removeRow}>
          &times;
        </button>
      </td>
    </tr>
  );
}

//Add
function Add(props) {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const suggestions = ["121241", "143123", "8471239"];
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value);
  };
  const onClick = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.key === "ArrowUp") {
      return active === 0 ? null : setActive(active - 1);
    } else if (e.key === "ArrowDown") {
      return active - 1 === filtered.length ? null : setActive(active + 1);
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
  };
  const [sum,setSum]=useState(0)
  const [talbeRows, setRows] = useState([
    {
      index: 0,
      ItemSKU: "",
      ItemQuantity: 1,
      ItemPrice: 0,
    },
  ]);



  const handleChange = (data) => {
    talbeRows[data.index] = data;
  };

  const addNewRow = () => {
    tableRowIndex = parseFloat(tableRowIndex) + 1;
    var updatedRows = [...talbeRows];
    updatedRows[tableRowIndex] = {
      index: tableRowIndex,
      ItemSKU: "",
      ItemQuantity: 1,
      ItemPrice: 0,
    };
    setRows(updatedRows);
  };

  const deleteRow = (index) => {
    if (talbeRows.length > 1) {
      var updatedRows = [...talbeRows];
      var indexToRemove = updatedRows.findIndex((x) => x.index == index);
      if (indexToRemove > -1) {
        updatedRows.splice(indexToRemove, 1);
        setRows(updatedRows);
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      products.push(event.currentTarget.value);
      event.target.value = "";
      addNewRow();
      console.log(...talbeRows);

    }
  };

  const handleSubmit = (e) => {
    console.log(...talbeRows)
    actions.TableString.StringOfTable = "Bill_Child_Temp";

    e.preventDefault();
    console.log(TableRow);
    talbeRows.forEach(function (arrayItem) {
      props.createPos(arrayItem, () => { })
      console.log(arrayItem);
    });
    setRows([
      {
        index: 0,
        ItemSKU: "",
        ItemQuantity: 1,
        ItemPrice: 0,
      },
    ]);

    window.alert("Product Added");
  };
  function onKeyDownparent(event) {
    onKeyDown(event);
    handleKeyDown(event);
  }

const handleSum=(e)=>{
  setSum(talbeRows.reduce((acc, record) => (acc + record.ItemQuantity * record.ItemPrice), 0))
}

  return (
    <div className="container">
      <section className="pos">
        <h1 className="title">Point Of Sales Terminal</h1>
        <form className="contact-form row" onSubmit={handleSubmit}>
          <div className="row">
            <div className="search__container">
              <input
                name="product"
                className="search__input"
                type="text"
                placeholder="Enter Product Name"
                onChange={onChange}
                onKeyDown={onKeyDownparent}
                value={input}
              />
              {renderAutocomplete()}

            </div>
            <div className="title">
              <AddItemModal />
            </div>

            <table className="table" id="customers">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">SKU</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">SubTotal</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {talbeRows.map((row, index) => {
                  if (row)
                    return (
                      <TableRow
                        key={index}
                        row={row}
                        handleDataChange={handleChange}
                        deleteRow={deleteRow}
                      ></TableRow>
                    );
                })}
              </tbody>
            </table>
            <table className="table table-condensed table-bordered table-striped">
              <tbody>
                <tr>
                  <td>
                      <b className="btn btn-success" onClick={handleSum}>Total +</b>
                    <div className="pull-right">
                      <b>Items:</b>
                      <span className="total_quantity">{tableRowIndex}{ }</span>

                      <b>Total: </b>
                      <span className="price_total">{sum}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="form-field col-lg-12">
              <input
                className="btn btn-primary submit-btn"
                value="Add Products"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  poslist: state.pos.list,
});

const mapActionToProps = {
  createPos: actions.create,
};

export default connect(mapStateToProps, mapActionToProps)(Add);
