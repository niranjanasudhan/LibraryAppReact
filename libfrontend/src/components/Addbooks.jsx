import { Button, Card, CardContent, CardHeader, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Addbooks = (props) => {
  var navigate= useNavigate();
  var[inp,setInp]=useState(props.data);
  console.log(props.data);
  console.log(props.method);

const inputHandler = (e)=>{
  const {name,value}=e.target;
  setInp((inp)=>({...inp,[name]:value}));
  console.log(inp)

}
const readHandler=()=>{
  console.log("clicked");
  if(props.method=="post")
  {
  axios.post("http://localhost:3008/addBooks",inp)
  .then((response)=>{
    alert("Data Added");
    navigate('/');
  })
  .catch(err=>console.log(err))
}
if(props.method=="put")
{
  axios.put("http://localhost:3008/edit/"+inp._id,inp)
  .then((response)=>{
    alert("Data Updated");
    window.location.reload(false);
  })
  .catch(err=>console.log(err))
}
}
  return (
    <div style={{paddingTop:"100px"}}> 
         <Grid container spacing={2}>
    <Grid item xs={2} md={2}>
      {/* <Item>xs=8</Item> */}
    </Grid>
    <Grid item xs={8} md={8}>
      {/* <Item>xs=4</Item> */}
      <Typography variant="h4" >
        ADD BOOKS
      </Typography>
    </Grid>
    <Grid item md={2} xs={2}>
      {/* <Item>xs=4</Item> */}
    </Grid>
    <Grid item xs={3} md={3}>
      {/* <Item>xs=4</Item> */}
    </Grid>
    <Grid item xs={6} md={6}>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          name="bookName"
          value={inp.bookName}
          onChange={inputHandler}
          label="Book Name"
          variant="outlined"
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          name="author"
          value={inp.author}
          onChange={inputHandler}
          label="Author"
          variant="outlined"
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          name="language"
          value={inp.language}
          onChange={inputHandler}
          label="Language"
          variant="outlined"
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          name="genre"
          value={inp.genre}
          onChange={inputHandler}
          label="Genre"
          variant="outlined"
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          name="bookNum"
          value={inp.bookNum}
          onChange={inputHandler}
          label="Book Number"
          variant="outlined"
        />
      </Item>
      <Item>
        <Button
          variant="contained"
     
         onClick={readHandler}
        >
          SUBMIT
        </Button>
      </Item>
    </Grid>


    
   
    <Grid item xs={3} md={3}></Grid>
   
  </Grid>;
    </div>
  )
}

export default Addbooks