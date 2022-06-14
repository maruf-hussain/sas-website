import { saveAs } from "file-saver";
import React from 'react';
import './Portfolio.css'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
const Portfolio = () => {
    const saveFile = () => {
        saveAs(
          "https://drive.google.com/file/d/1bRyH2A8MO-tzfL6NQkogrxK7Aloke8lP/view?usp=sharing",
          "SAS.pdf"
        );
      };
    return (
        <div>
            <button type="button" className="pdf-but" data-bs-toggle="tooltip" data-bs-placement="top" title="Download Portfolio" onClick={saveFile}> <SimCardDownloadIcon/>Pdf</button>
            
        </div>
    );
};

export default Portfolio;