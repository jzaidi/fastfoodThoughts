import React, { Component } from "react";
import { isSearched } from "../../App";
import Button from "../Button/Button";
import "./Table.css";
import VoteUpDown from "../Vote/VotePost";

const largeColumn = {
  width: "40%"
};
const midColumn = {
  width: "30%"
};
const smallColumn = {
  width: "10%"
};




const largeColumn1 = {
  width: ".9%"
};
const midColumn2 = {
  width: "18.8%"
};
const midColumn3 = {
  width: "40%"
};




const Table = ({
  list,
  pattern,
  onDismiss,
  handleUpvote,
  onClick,
  editPost
}) => (
  <div className="table">
    <thead>
      <tr>
        <th style={largeColumn1}>Title</th>
        <th style={midColumn2}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Author
        </th>
      </tr>
    </thead>
    {list.filter(isSearched(pattern)).map(item => (
      <div key={item.id} className="table-row">
        <span style={largeColumn}>
          <a>{item.title}</a>
        </span>
        <span style={midColumn}>
          {item.author}&nbsp;
          <img
            src={item.images}
            alt=""
            style={{ width: "30px", height: "40px" }}
          />
        </span>
        <span style={smallColumn}>
          <VoteUpDown votes={item.votes} downvotes={item.downvotes} />
        </span>
        <span
          style={smallColumn}
          className="glyphicon glyphicon-remove-sign Post-Delete"
          onClick={() => onClick(item.id)}
        />
        <span style={smallColumn}>
          <span
            className="glyphicon glyphicon-pencil Post-Edit"
            onClick={() => editPost(item.id)}
          />
        </span>
      </div>
    ))}
  </div>
);

export default Table;
