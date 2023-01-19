import React from "react";
import "./style.css";
import DatePicker from "./../DatePicker";

export default function index() {
  return (
    <div>
      <div className="mainHeader">
        <div className="searchRow">
          <div className="searchInpDiv">
            <span className="where">Where</span> <br />
            <input
              type="text"
              className="searchInp"
              placeholder="City , airport , address, or hotel"
            />
          </div>
          <div
            className="datePicker1"
            style={{ borderLeft: "1px solid lightgrey", paddingLeft: "10px" }}
          >
            <span className="where">From</span> <br />
            <DatePicker />
          </div>
          <div
            className="datePicker2"
            style={{ borderLeft: "1px solid lightgrey", paddingLeft: "10px" }}
          >
            <span className="where">until</span> <br />
            <DatePicker />
          </div>
          <div className="searchIconDiv">
          <i className="fa-solid fa-magnifying-glass"  style={{ color: "white"}}></i>
          </div>
          <div className="searchBtn d-none">Search For Cars</div>
        </div>
      </div>
    </div>
  );
}
// style={{ color: "white"}}
