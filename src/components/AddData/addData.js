import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { addProduct } from "../../store/actions";
import DropDown from "./dropDown";
import "./addData.css";

export default class AddData extends Component {
  state = { name: "", category: "Categories", date: "" };
  handleName = (e) => this.setState({ name: e.target.value });
  handleCategory = (categoryName) =>
    this.setState({
      category: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
    });
  handleAdd = () => {
    if (this.state.category === "Categories" || this.state.name === "")
      alert("Missing product information");
    else {
      this.props.dispatch(
        addProduct({
          name: this.state.name,
          category: this.state.category,
          date: moment().format("l"),
        })
      );
      this.setState = { name: "", category: "Categories", date: "" };
    }
  };

  render() {
    return (
      <div className='addData'>
        <input
          type='text'
          value={this.state.name}
          onChange={this.handleName}
        ></input>
        <DropDown
          category={this.state.category}
          handleCategory={this.handleCategory}
        />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

AddData = connect()(AddData);
