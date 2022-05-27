import React from "react";
import {Outlet,useNavigate} from 'react-router-dom'
import * as d3 from 'd3'

const dataset = [
  [ 34,     78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,   411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,    333 ],
  [ 78,    320 ],
  [ 21,   123 ]
];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3.scaleLinear()
     .domain([0, d3.max(dataset, (d) => d[0])])
     .range([padding, w - padding]);

const yScale = d3.scaleLinear()
     .domain([0, d3.max(dataset, (d) => d[1])])
     .range([h - padding, padding]);

const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", (d) => xScale(d[0]))
.attr("cy",(d) => yScale(d[1]))
.attr("r", (d) => 5);

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text((d) =>  (d[0] + "," + d[1]))
.attr("x", (d) => xScale(d[0] + 10))
.attr("y", (d) => yScale(d[1]))

const xAxis = d3.axisBottom(xScale);
// Add your code below this line
const yAxis = undefined;
// Add your code above this line

svg.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.call(xAxis);

// Add your code below this line



// Add your code above this line





function Dashboard(props) {

  const navigate=useNavigate();

  function handleClick(path){
    navigate(path);
  }




  return (
    <div className="content-wrapper">
    
    
      {/* Main content */}
      <section className="content" style={{paddingTop:'100px',justifyContent:'left'}}>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info" >
                <div className="inner" style={{backgroundColor:'#4723D9'}}>
                  <h3>150</h3>
                  <p>Daily Sale</p>
                </div >
                <div className="icon" >
                  <i className="ion ion-bag" />
                </div>
                <a href="#" className="small-box-footer" style={{backgroundColor:'#4723D9'}}>
                   <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner" style={{backgroundColor:'#4723D9'}}>
                  <h3>
                    53<sup style={{ fontSize: 20 }}>%</sup>
                  </h3>
                  <p>Profit</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a onClick={()=>handleClick("SalesParent")} className="small-box-footer" style={{backgroundColor:'#4723D9'}}> 
                 <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner" style={{backgroundColor:'#4723D9',color:'white'}}>
                  <h3>44</h3>
                  <p>Monthly Sale</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a onClick={()=>handleClick("SalesParent")} className="small-box-footer" style={{backgroundColor:'#4723D9',color:'white'}}>
                   <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner" style={{backgroundColor:'#4723D9'}}>
                  <h3>65</h3>
                  <p>Vendor Payments</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
                </div>
                <a onClick={()=>handleClick("VendorPayments")} className="small-box-footer" style={{backgroundColor:'#4723D9'}}>
                   <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
          </div>
          {/* /.row */}
          {/* Main row */}
          <div className="row">
            {/* Left col */}
            <section className="col-lg-7 connectedSortable">
              {/* Custom tabs (Charts with tabs)*/}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fas fa-chart-pie mr-1" />
                    Sales
                  </h3>
                  <div className="card-tools">
                    <ul className="nav nav-pills ml-auto">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#revenue-chart"
                          data-toggle="tab"
                        >
                          Area
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#sales-chart"
                          data-toggle="tab"
                        >
                          Donut
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <div className="tab-content p-0">
                    {/* Morris chart - Sales */}
                    <div
                      className="chart tab-pane active"
                      id="revenue-chart"
                      style={{ position: "relative", height: 300 }}
                    >
                      <canvas
                        id="revenue-chart-canvas"
                        height={300}
                        style={{ height: 300 }}
                      />
                    </div>
                    <div
                      className="chart tab-pane"
                      id="sales-chart"
                      style={{ position: "relative", height: 300 }}
                    >
                      <canvas
                        id="sales-chart-canvas"
                        height={300}
                        style={{ height: 300 }}
                      />
                    </div>
                  </div>
                </div>
                {/* /.card-body */}
              </div>
            </section>
            {/* /.Left col */}
            {/* right col (We are only adding the ID to make the widgets sortable)*/}
            <section className="col-lg-5 connectedSortable">
              {/* Map card */}
              
              {/* /.card */}
              {/* solid sales graph */}
              <div className="card bg-gradient-info">
                <div className="card-header border-0">
                  <h3 className="card-title">
                    <i className="fas fa-th mr-1" />
                    Sales Graph
                  </h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn bg-info btn-sm"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn bg-info btn-sm"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <canvas
                    className="chart"
                    id="line-chart"
                    style={{
                      minHeight: 250,
                      height: 250,
                      maxHeight: 250,
                      maxWidth: "100%",
                    }}
                  />
                </div>
                {/* /.card-body */}
                <div className="card-footer bg-transparent">
                  <div className="row">
                    <div className="col-4 text-center">
                      <input
                        type="text"
                        className="knob"
                        data-readonly="true"
                        defaultValue={20}
                        data-width={60}
                        data-height={60}
                        data-fgcolor="#39CCCC"
                      />
                      <div className="text-white">Mail-Orders</div>
                    </div>
                    {/* ./col */}
                    <div className="col-4 text-center">
                      <input
                        type="text"
                        className="knob"
                        data-readonly="true"
                        defaultValue={50}
                        data-width={60}
                        data-height={60}
                        data-fgcolor="#39CCCC"
                      />
                      <div className="text-white">Online</div>
                    </div>
                    {/* ./col */}
                    <div className="col-4 text-center">
                      <input
                        type="text"
                        className="knob"
                        data-readonly="true"
                        defaultValue={30}
                        data-width={60}
                        data-height={60}
                        data-fgcolor="#39CCCC"
                      />
                      <div className="text-white">In-Store</div>
                    </div>
                    {/* ./col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.card-footer */}
              </div>
              {/* /.card */}
              {/* Calendar */}
              <div className="card bg-gradient-success">
                <div className="card-header border-0">
                  <h3 className="card-title">
                    <i className="far fa-calendar-alt" />
                    Calendar
                  </h3>
                  {/* tools card */}
                  <div className="card-tools">
                    {/* button with a dropdown */}
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-success btn-sm dropdown-toggle"
                        data-toggle="dropdown"
                        data-offset={-52}
                      >
                        <i className="fas fa-bars" />
                      </button>
                      <div className="dropdown-menu" role="menu">
                        <a href="#" className="dropdown-item">
                          Add new event
                        </a>
                        <a href="#" className="dropdown-item">
                          Clear events
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                          View calendar
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                  {/* /. tools */}
                </div>
                {/* /.card-header */}
                <div className="card-body pt-0">
                  {/*The calendar */}
                  <div id="calendar" style={{ width: "100%" }} />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </section>
            {/* right col */}
          </div>
          {/* /.row (main row) */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
}
export default Dashboard;
