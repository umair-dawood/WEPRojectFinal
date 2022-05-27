import React, { useState,useEffect } from "react";
import jsPDFInvoiceTemplate, { OutputType } from "jspdf-invoice-template";
import './forms.scss'
import { connect } from 'react-redux';
import * as actions from '../actions/pos';



function PrintInvoice(props) {
    var [date,setDate] = useState(new Date());
    
    
    let sumQuantity = (props.poslist.reduce((acc,record)=>(acc + record.ItemQuantity*record.ItemPrice),0))
  
    
    
    
    useEffect(() => {
        actions.TableString.StringOfTable="Bill_Child_Temp";
        console.log('Updating Invoice')
        props.fetchAllPos();
        
    }, []);

    var arguement = {
        outputType: OutputType.Save,
        returnJsPDFDocObject: true,
        fileName: "Invoice 2021",
        orientationLandscape: false,
        logo: {
            src: 'https://i.imgur.com/HTqt8Gi.png',
            width: 30, //aspect ratio = width/height
            height: 26.66,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 15 //negative or positive num, from the current position
            }
        },
        business: {
            name: "Home Electronics",
            address: "Gulistan-e-Jauhar",
            phone: "03112286006",
            email: "mazzasimq1@gmail.com",
            website: "masssive.com",
        },
        contact: {
            label: "Invoice issued for:",
            name: "Maaz Asim",
            address: "Sana Avenue",
            phone: "03112286006",
        },
        invoice: {
            label: "Invoice #: ",
            num: 1,
            invDate: "Payment Date:" +date.toLocaleDateString()+"  "+ date.toLocaleTimeString(),

            headerBorder: false,
            tableBodyBorder: false,
            header: ["#", "Description", "Price", "Quantity", "Total"],
            table:
                props.poslist.map((item, index) => ([
                    index + 1,
                    item.ItemSKU,
                    item.ItemPrice,
                    item.ItemQuantity,
                    item.ItemQuantity * item.ItemPrice
                ])),
            invTotalLabel: "Total:",
            invTotal: sumQuantity.prototype,
            invCurrency: "PKR",


            invDescLabel: "Invoice Note",
            invDesc: "I AM JUST TESTING THIS COMPONENT AT THIS TIME TESTER:MAAZ ASIM",
        },
        footer: {
            text: "The invoice is created on a computer and is valid without the signature and stamp.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    };

    function printInvoiceOnClick() {
        const pdfObject = jsPDFInvoiceTemplate(arguement).jsPDFDocObject;

        pdfObject.autoPrint();
        pdfObject.output('dataurlnewwindow');

    }

    return (

        <div className="form-field col-lg-12">
           
            <input className="submit-btn" type="button" value="Print Invoice" onClick={printInvoiceOnClick} />
        </div>
    );
}


const mapStateToProps = state => ({
    poslist: state.pos.list
})
const mapActionToProps =  {
    fetchAllPos: actions.fetchall
}
export default connect(mapStateToProps,mapActionToProps)(PrintInvoice);