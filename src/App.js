import React from "react";
import Title from "./components/Title/title";
import Table from "./components/Table/table";
import AddData from "./components/AddData/addData";
import InputFile from "./components/InputFile/inputFile";
import "./App.css";

const App = () => {
  return (
    <div className='main'>
      <Title />
      <Table />
      <AddData />
      <InputFile />
    </div>
  );
};

export default App;
