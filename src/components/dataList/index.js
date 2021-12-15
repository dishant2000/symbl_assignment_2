import React,{useEffect,useContext} from 'react'
import {DataContext} from '../../App'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import loading from '../../assets/loading.gif'
import './index.css';
function DataList(props) {
    const {fetchData,data,setState,state} = useContext(DataContext);
    
    useEffect(()=>{
      },[])
    return (
        <div className = "list-wrapper">
          <Button onClick = {()=>{fetchData()}} sx = {{width: "100%",maxWidth: 700}}variant="contained">Fetch-Data</Button>
           {
               state.req_pending ? <img style = {{margin : "10px"}} src = {loading} alt = "loading"/> : <TableContainer component={Paper}>
               <Table sx={{maxWidth : 700,margin:"auto" }} aria-label="simple table">
                 <TableHead>
                   <TableRow>
                     <TableCell>ID</TableCell>
                     <TableCell align="right">ITEM</TableCell>
                     
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {data.map((row) => (
                     <TableRow
                       key={row.id}
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                       <TableCell component="th" scope="row">
                         {row.id}
                       </TableCell>
                       <TableCell align="right">{row.name}</TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </Table>
             </TableContainer> 
           }
        </div>
    )
}

export default DataList
