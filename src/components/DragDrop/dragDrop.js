import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import pdfjsLib from "pdfjs-dist/webpack";
import logo from "./uploadFile.png";
import "./dragDrop.css";

async function getPdfText(data) {
  let doc = await pdfjsLib.getDocument({ data }).promise;
  let pageTexts = Array.from({ length: doc.numPages }, async (v, i) => {
    return (await (await doc.getPage(i + 1)).getTextContent()).items
      .map((token) => token.str)
      .join("");
  });
  return (await Promise.all(pageTexts)).join("");
}

export default () => {
  const [ishover, setIshover] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      file.path.includes(".pdf")
        ? reader.readAsArrayBuffer(file)
        : reader.readAsText(file);

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const content = reader.result;
        file.path.includes(".pdf")
          ? getPdfText(content).then((text) => console.log("parse " + text))
          : console.log(content);
      };
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className='dragDrop'
      style={ishover ? {backgroundColor: "blue"} : {backgroundColor: ""}}
      onDragOver={ () => setIshover({ishover : false}) }
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p>Drag your file here, or click to select file</p>
      <img id='uploadFile' src={logo} alt='uploadFile'></img>
    </div>
  );
};
