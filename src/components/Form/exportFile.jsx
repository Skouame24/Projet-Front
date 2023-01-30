import React from "react";
import { Button } from "@mui/material";
import FileSaver from "file-saver";
import xlxs from "xlsx-js-style"
import { Tooltip } from "@mui/material";


const ExportExcel = ({excelData, fileName }) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const FileExtension = '.xlsx';

    const exportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = { Sheets: { 'data': ws}, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, {bookType:'xlsx', type: 'array'});
        const data = new Blob([excelBuffer], { type: fileType});
        FileSaver.saveAs(data, fileName + FileExtension);
    }

return(
 
    <>
      <Tooltip title="Excel Export">
          <Button variant='contained'
              onClick={(e) => exportToExcel(fileName)} color="primary"
              style={{ cursor: "pointer", fontSize: 14}}
            >
            Excel Export
          </Button>
      </Tooltip>
    </>
) 

}

export default ExportExcel;