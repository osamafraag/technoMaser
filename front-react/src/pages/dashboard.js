import React,{useState,useEffect} from 'react'
import { UsersData,AddUser,EditUser,DeleteUser } from './../APIs/users'
import { useContext } from "react";
import { TokenContext } from '../context/token';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate()
  const { Token , setToken }  = useContext(TokenContext)
  const[users,setUsers] = useState([]);
  const[show,setShow] = useState(false);
  const[selectId,setSelectId] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '',phone:'',photo:'path',password:'' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

    useEffect(() => {
      if (!Token) {
        console.log('Navigating to /Login');
        navigate('/Login');
      }else{
        UsersData(Token)
          .then((result) => {
            setUsers(result.data)
          })
          .catch((error) => console.log(error));
        }
        }, []);
    const handleDelete = (id)=>{
      DeleteUser(Token,id)
      .then((result)=>{console.log(result)})
      .catch((error)=>{console.log(error)})
    }
    const handleEdit = async (e,id)=>{
      e.preventDefault();
      EditUser(Token,id,formData)
      .then((result)=>{console.log(result)})
      .catch((error)=>{console.log(error)});
      setFormData({name: '', email: '',phone:'',photo:'path',password:'' });
      setSelectId(null)
    }
    const handleAdd = async (e)=>{
      e.preventDefault();
      AddUser(Token,formData)
      .then((result)=>{console.log(result)})
      .catch((error)=>{console.log(error)})
    }
    return (
    <div className='container'>
      <a className='btn btn-primary m-2' onClick={()=>{setShow(true)}}>Add</a>
        <table class="table table-striped">
          <thead>
          <tr>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">phone</th>
          <th scope="col">action</th>
          </tr>
          </thead>
  <tbody>
    {users?.map((user,index)=>{
        return(
            <tr>
      <td>{user.photo}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <a className='btn btn-danger m-2' onClick={()=>{handleDelete(user.id)}}>Delete</a>
        <a className='btn btn-warning m-2' onClick={()=>{
        setFormData({name: user.name, email: user.email,phone:user.phone,photo:'path',password:'' });
        setSelectId(user.id);setShow(true)}}>Edit</a>
      </td>
    </tr>

        )
    })}
    
  </tbody>
</table>
<Modal show={show} onHide={()=>{setShow(false)}} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectId? <span> Add User</span> : <span> Edit User</span>}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="baseCost">name</span>
            <input type="text" class="form-control" required name='name'
            onChange={()=>{handleChange()}} value={formData?.name}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="baseCost">email</span>
            <input type="email" class="form-control" required name='email'
            onChange={()=>{handleChange()}} value={formData?.email}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="baseCost">phone</span>
            <input type="text" class="form-control" required name='phone'
            onChange={()=>{handleChange()}} value={formData?.phone}/>
          </div>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="baseCost">password</span>
            <input type="password" class="form-control" required name='password'
            onChange={()=>{handleChange()}} value={formData?.password}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' 
          onClick={() => {selectId? handleEdit(selectId):handleAdd(); setShow(false) }}>
            {selectId? <span> Add User</span> : <span> Edit User</span>}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}