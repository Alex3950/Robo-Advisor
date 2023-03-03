import React from 'react'
import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Upload.module.css";
function Upload() {
    const navigate = useNavigate();
    const[image,setImage]=useState(null);
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const data = event.target.result;
          localStorage.setItem('excelFile', data);
        };
        reader.readAsDataURL(file);
      };
      const storedFile = localStorage.getItem('excelFile');
      const onFrameButtonClick = useCallback(() => {
        navigate("/overview");
      }, [navigate]);
    console.log(storedFile);
  return (
    <div>
        <div>Upload</div>
        <input className={styles.uploadImage} type="file"  onChange={handleFileUpload}/>
        {/* <iframe src={storedFile} /> */}
        <button style={{marginLeft:'10%'}} onClick={onFrameButtonClick}>Submit</button>
    </div>
  )
}

export default Upload
