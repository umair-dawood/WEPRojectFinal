import { useState } from "react";
import "./forms.scss";
import { faTimesCircle, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Settings = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    
    var settingsCacheWarehouse = [];
    var settingsCacheBrand = [];
    var settingsCacheCategory = [];
    var settingsCacheBank = [];

    var WareHousePreviewData = [];

    var retrievedDataWareHouse = localStorage.getItem("WareHouse");
    if (retrievedDataWareHouse == null) {
        WareHousePreviewData = [1, 2, 3];
    } else {
        WareHousePreviewData = JSON.parse(retrievedDataWareHouse);
    }
    var retrievedDataBrand = localStorage.getItem("Brand");
    var BrandPreviewData = JSON.parse(retrievedDataBrand);

    var retrievedDataCategory = localStorage.getItem("Category");
    var CategoryPreviewData = JSON.parse(retrievedDataCategory);

    var retrievedDataBank = localStorage.getItem("Bank");
    var BankPreviewData = JSON.parse(retrievedDataBank);

    const onDelete = (event, i) => {
        if (event.target.getAttribute("name") == "warehouse") {
            WareHousePreviewData.splice(i, 1);
            localStorage.setItem("WareHouse", JSON.stringify(WareHousePreviewData));
        }
        if (event.target.getAttribute("name") == "brand") {
            BrandPreviewData.splice(i, 1);
            localStorage.setItem("Brand", JSON.stringify(BrandPreviewData));
        }
        if (event.target.getAttribute("name") == "category") {
            CategoryPreviewData.splice(i, 1);
            localStorage.setItem("Category", JSON.stringify(CategoryPreviewData));
        }
        if (event.target.getAttribute("name") == "bank") {
            BankPreviewData.splice(i, 1);
            localStorage.setItem("Bank", JSON.stringify(BankPreviewData));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        settingsCacheBrand.push(event.target.AddBrand.value);
        settingsCacheCategory.push(event.target.AddCategory.value);
        settingsCacheBank.push(event.target.AddBank.value);
        settingsCacheWarehouse.push(event.target.AddWareHouse.value);

        localStorage.setItem("Brand", JSON.stringify(settingsCacheBrand));
        localStorage.setItem("Category", JSON.stringify(settingsCacheCategory));
        localStorage.setItem("Bank", JSON.stringify(settingsCacheBank));
        localStorage.setItem("WareHouse", JSON.stringify(settingsCacheWarehouse));
    };

    return (
        <div style={{ padding: "100px" }}>
            <h1 style={{ paddingBottom: '100px' }}>Settings</h1>
            <hr/>

            <div style={{ padding: '50px' }}>
                <section>
                    <h5>Business Locations</h5>
                    <Button variant="primary" onClick={handleShow} style={{ margin: '30px' }}>
                        Add+
                    </Button>

                    <Modal size='xl' show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Business Location</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <section className="pos">
                                <form className="contact-form row" onSubmit={handleSubmit}>
                                    <div className="form-field col-lg-6">
                                        <input
                                            name="AddBrand"
                                            id="posName"
                                            className="input-text js-input"
                                        ></input>
                                        <label className="label" for="">
                                            Name
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-6">
                                        <input
                                            name="AddCategory"
                                            id="posName"
                                            className="input-text js-input"
                                        ></input>
                                        <label className="label" for="">
                                            Location ID
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-6">
                                        <input
                                            name="AddWareHouse"
                                            id="posName"
                                            className="input-text js-input"
                                        ></input>
                                        <label className="label" for="">
                                            Contact
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-12">
                                        <textarea
                                            name="AddBank"
                                            id="posName"
                                            className="input-text js-input"
                                        ></textarea>
                                        <label className="label" for="">
                                            Address
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-12">
                                        <input
                                            className="submit-btn"
                                            type="submit"
                                            value="Save Settings"
                                        />
                                    </div>
                                </form>
                            </section>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </section>

                <section>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Location ID</th>
                                <th>Address</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Home Electornics</td>
                                <td>Shop</td>
                                <td>Gulistan e johar,Block-12</td>
                                <td>031111111111</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            </div>
            <hr/>
            <div  style={{padding:'50px'}}>
                <section>
                    <h5>Supplier</h5>
                    <Button variant="primary" onClick={handleShow1} style={{ margin: '30px' }}>
                        Add+
                    </Button>

                    <Modal size='xl' show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Supplier Information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <section className="pos">
                                <form className="contact-form row" onSubmit={handleSubmit}>
                                    <div className="form-field col-lg-6">
                                        <input
                                            name="AddBrand"
                                            id="posName"
                                            className="input-text js-input"
                                        ></input>
                                        <label className="label" for="">
                                            Name
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-6">
                                        <input
                                            name="AddCategory"
                                            id="posName"
                                            className="input-text js-input"
                                        ></input>
                                        <label className="label" for="">
                                            Account Info
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-6">
                                        <input
                                            name="AddWareHouse"
                                            id="posName"
                                            className="input-text js-input"
                                        ></input>
                                        <label className="label" for="">
                                            Contact
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-12">
                                        <textarea
                                            name="AddBank"
                                            id="posName"
                                            className="input-text js-input"
                                        ></textarea>
                                        <label className="label" for="">
                                            Address
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-12">
                                        <input
                                            name="AddBank"
                                            id="posName"
                                            className="input-text js-input"
                                        ></input>
                                        <label className="label" for="">
                                            Email
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-12">
                                        <input
                                            className="submit-btn"
                                            type="submit"
                                            value="Save Settings"
                                        />
                                    </div>
                                </form>
                            </section>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </section>

                <section>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Location ID</th>
                                <th>Address</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Home Electornics</td>
                                <td>Shop</td>
                                <td>Gulistan e johar,Block-12</td>
                                <td>031111111111</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            </div>
            <hr/>
            <div  style={{padding:'50px'}}>
                <section>
                    <h5>Categories</h5>
                    <Button variant="primary" onClick={handleShow2} style={{ margin: '30px' }}>
                        Add+
                    </Button>

                    <Modal size='xl' show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Business Location</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <section className="pos">
                                <form className="contact-form row" onSubmit={handleSubmit}>
                                    <div className="form-field col-lg-6">
                                        <input
                                            name="AddBrand"
                                            id="posName"
                                            className="input-text js-input"
                                        ></input>
                                        <label className="label" for="">
                                            Name
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-6">
                                        <input
                                            name="AddCategory"
                                            id="posName"
                                            className="input-text js-input"
                                        ></input>
                                        <label className="label" for="">
                                            Location ID
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-6">
                                        <input
                                            name="AddWareHouse"
                                            id="posName"
                                            className="input-text js-input"
                                        ></input>
                                        <label className="label" for="">
                                            Contact
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-12">
                                        <textarea
                                            name="AddBank"
                                            id="posName"
                                            className="input-text js-input"
                                        ></textarea>
                                        <label className="label" for="">
                                            Address
                                        </label>
                                    </div>
                                    <div className="form-field col-lg-12">
                                        <input
                                            className="submit-btn"
                                            type="submit"
                                            value="Save Settings"
                                        />
                                    </div>
                                </form>
                            </section>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </section>

                <section>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Location ID</th>
                                <th>Address</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Home Electornics</td>
                                <td>Shop</td>
                                <td>Gulistan e johar,Block-12</td>
                                <td>031111111111</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            </div>
        </div>
    );
};

export default Settings;
