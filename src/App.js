import React from "react";
import Title from "./components/Title/title";
import Table from "./components/Table/table";
import AddData from "./components/AddData/addData";
import InputFile from "./components/InputFile/inputFile";
import "./App.css";

export default () =>{
  return (
    <div className='main'>
      <Title />
      <Table />
      <AddData />
      <InputFile />
    </div>
  );
}
