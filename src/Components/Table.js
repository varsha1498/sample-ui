import React ,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import './Modal.css'
const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const [rows,setRows]=useState([])
  const [isModal,setModal] = useState(false);
  useEffect(()=>{
    axios.get("http://localhost:8080/customers/getAllCustomers")
    .then((res)=>{
      // console.log(res.data.con);
       setRows(res.data.content);
    }).catch((err)=>{
      console.log(err.data);
    })
  },)
  const handledelet=(event,id)=>{
    event.preventDefault();
    const row1=rows.filter(item=>item.id!=id);
    setRows(row1)
  }
  const onSubmit = ()=>{
    console.log("I am submitting");
  }
  const DisplayModal = (id) => {
  const event = rows.filter(row=>id===row.id) ;
  console.log(event);

    return (
      <div className="modal-form">
            <form onSubmit={onSubmit} className = "modal-container" >
                <div className="close-btn">
                    <div onClick={()=>setModal(false)}>
                        Close
                    </div>
                </div>
                <div className = "left">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                     <input className="form-control" id="firstName"  value = {event.firstName} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input className="form-control" id="lastName"  value = {event.lastName} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input className="form-control" id="email"  value = {event.email}required/>
                </div>
                </div>
               <div className="right">
               <div className="form-group desc">
                    <label htmlFor="address">Address</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter Address here"
                        value = {event.address}
                    />
                </div>
             
                <div className="form-group">
                    <label htmlFor="contact">Contact: </label>

                    <input className="form-control" id="contact"  value = {event.contactNumber}required/>
                
                </div>
                <div className="form-group">
                    <label htmlFor="landline">Landline</label>
                    <input className="form-control" id="landline"  value = {event.landline} required/>
                </div>
               </div>
                

                <div className="form-group">
                    <button className="form-control btn" type="submit">
                            Submit
                    </button>
                </div>
            </form>
      
    </div>
    
    )
  }

  const handleEdit=(event,id)=>{
    event.preventDefault();
    setModal(true);
    console.log(isModal);
    console.log("I will edit");
    console.log(id);
    {isModal && DisplayModal(id)}
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">ContactNo</TableCell>
            <TableCell align="right">LandLine</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.contactNumber}</TableCell>
              <TableCell>{row.landline}</TableCell>
              <TableCell><button onClick={(event)=>handleEdit(event,row.id)} style={{width:"80px",backgroundColor:"blue",height:'40px'}}> Edit</button></TableCell>
              <TableCell> <button onClick={(event)=>handledelet(event,row.id)} style={{width:"80px",backgroundColor:"green",height:'40px'}}> Delete</button></TableCell>
            </TableRow>
          ))}
           
        </TableBody>
       
      </Table>
    </TableContainer>
  );
}
