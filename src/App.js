import React from "react";
import Title from "./components/Title/title";
import Table from "./components/Table/table";
import AddData from "./components/AddData/addData";
import DragDrop from "./components/DragDrop/dragDrop";
import "./App.css";

//No coding on my birthday bitch!

export default () =>{
  return (
    <div className='main'>
      <Title />
      <Table />
      <AddData />
      <DragDrop />
    </div>
  );
}
