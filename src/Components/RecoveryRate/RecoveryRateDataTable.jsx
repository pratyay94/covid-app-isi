import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

export default function RecoveryRateDataTable(props) {  
  const { countryData, stateData } = { ...props.data };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Recovery Rate Data table">
        <TableHead>
          <TableRow>
            <StyledTableCell>State / UT</StyledTableCell>
            {stateData[0].recoveryRate.map((item, index) => (
              <StyledTableCell style={{whiteSpace:"nowrap"}} align="center" key={index}>{item.date}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key="countryRow">
            <StyledTableCell component="th" scope="row">
              {countryData.countryName}
            </StyledTableCell>
            {countryData.recoveryRate.map((item,index) => (
              <StyledTableCell align="center" key={index}> {item.rate} </StyledTableCell>
            ))}
          </StyledTableRow>
          {stateData.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {item.stateName}
              </StyledTableCell>
              {item.recoveryRate.map((recoveryItem, index) => (
                    <StyledTableCell align="center" key={index}>
                      {recoveryItem.rate ? recoveryItem.rate : "N/A"}
                    </StyledTableCell>                  
                ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
