import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const getHeaders = (headerArr) => {
  return headerArr.map((i, k)=>{
    return <TableCell key={k} align="right">{i}</TableCell>
  })
}

const getRows = (data) => {
  return data.map((i,k)=>{
    const myArr = []
    const {name, budgetAmt, actualAmt, varianceAmt, month, year} = i
    myArr.push(name, budgetAmt, actualAmt, varianceAmt, month, year)
    return (
      <TableRow key={k}>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="right">{budgetAmt}</TableCell>
        <TableCell align="right">{actualAmt}</TableCell>
        <TableCell align="right">{varianceAmt}</TableCell>
        <TableCell align="right">{month}</TableCell>
        <TableCell align="right">{year}</TableCell>
      </TableRow>
    )
  })
}

export default function DenseTable(props) {
  const classes = useStyles();
  const data = props.data
  const headers = (['Name','Budget Amount','Actual Amount', 'Variance', 'Month', 'Year'])


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="transactions">
        <TableHead>
          <TableRow>
            {getHeaders(headers)}
          </TableRow>
        </TableHead>
        <TableBody>
          {getRows(data)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
