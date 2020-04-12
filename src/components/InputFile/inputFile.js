import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./inputFile.css";

export default () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const content = reader.result;
        console.log(file.path);
        console.log(content);
      };
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className='inputFile' {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};
