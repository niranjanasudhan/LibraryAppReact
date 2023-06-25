import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import Addbooks from './Addbooks';
const Viewbooks = () => {
  var[books,setBooks] = useState([]);
  var[update,setUpdate]=useState(false)
  var[singleValue,setSingleValue]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3008/viewbooks")
    .then((response)=>{
      setBooks(response.data);
      console.log(response.data)
    })
  },[])
  var deleteValues=(id)=>{
    console.log(id);
    axios.delete("http://localhost:3008/deleteBooks/"+id)
    .then((response)=>{
      alert("deleted");
      window.location.reload(false);
    })
    .catch(err=>console.log(err))
  }
  var updateValues=(value)=>{
    console.log("update Clicked")
    setUpdate(true);
    setSingleValue(value);


  }

  var finalJSX=<TableContainer>
  <Table>
      <TableHead>
          <TableRow>
              <TableCell>
              Book Name
              </TableCell>
              <TableCell>
              Author
              </TableCell>
              <TableCell>
              Language
              </TableCell>
              <TableCell>
              Genre
              </TableCell>
              <TableCell>
              Book Number
              </TableCell>
              <TableCell>
              Actions
              </TableCell>
              </TableRow>
  
      </TableHead>
      <TableBody>
      {books.map((value,index)=>{
                  return(
  
              <TableRow key={index}>
                  <TableCell >{value.bookName}</TableCell>
                  <TableCell >{value.author}</TableCell>
                  <TableCell >{value.language}</TableCell>
                  <TableCell >{value.genre}</TableCell>
                  <TableCell >{value.bookNum}</TableCell>
                  <TableCell ><Button variant='contained' onClick={()=>deleteValues(value._id)}>
                    Delete
                    </Button></TableCell>
                    <TableCell ><Button variant='contained' onClick={()=>updateValues(value)}>
                    Update
                    </Button></TableCell>
              </TableRow>
    )
  })}
      </TableBody>
      </Table>
      </TableContainer>

      if(update) finalJSX = <Addbooks data={singleValue} method='put'/>
  // return ( 
  
  //   <div style={{paddingTop:"100px"}}>


  //   </div>
  // )
  return finalJSX;
}

export default Viewbooks