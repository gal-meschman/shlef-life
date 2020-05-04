import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { getPdfText, filterArray, regexCarmela } from "./functions";
import logo from "./uploadFile.png";
import "./dragDrop.css";

export default () => {
  const [ishover, setIshover] = useState(false);
  // const [arr, setArr] = useState([]);

  const onDragOver = () => {
    !ishover && setIshover(true);
  }
  const onDragLeave = () => {
    setIshover(false);
  }

  const onDrop = useCallback((acceptedFiles) => {
    let arr = [];
    setIshover(false);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      file.path.includes(".pdf")
        ? reader.readAsArrayBuffer(file)
        : reader.readAsText(file);
      reader.onload = () => {
        const content = reader.result;
        file.path.includes(".pdf")
          ? getPdfText(content).then((text) => console.log("parse " + text))
          : (arr = content.match(regexCarmela).filter(filterArray));
        console.log(arr);
      };
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className={`dragDrop ${ishover && "dragFile"}`}
      {...getRootProps()}
      onDragOver= {onDragOver}
      onDragLeave = {onDragLeave}
    >
      <input {...getInputProps()} />
      <p>Drag your file here, or click to select file</p>
      <img id='uploadFile' src={logo} alt='uploadFile'></img>
    </div>
  );
};
