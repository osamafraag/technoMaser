import React,{useState,useEffect} from 'react'
import { UsersData,AddUser,EditUser,DeleteUser } from './../APIs/users'
import { useContext } from "react";
import { TokenContext } from '../context/token';
import UsersTable from '../components/users/usersTable';
import UserForm from '../components/users/usersForm';
import { useNavigate } from "react-router-dom";
import { RolesData,AssignRole,UserRoles } from '../APIs/roles';

export default function Dashboard() {
  const navigate = useNavigate()
  const { Token , setToken }  = useContext(TokenContext)
  const[users,setUsers] = useState([]);
  const[roles,setRoles] = useState([]);
  const[userRoles,setUserRoles] = useState([]);
  const[roleId,setRoleId] = useState(0);
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
        
        RolesData(Token)
          .then((result) => {
            setRoles(result.data)
          })
          .catch((error) => console.log(error))
        }
        }, []);
      
    const handleDelete = (id)=>{
      DeleteUser(Token,id)
      .then((result)=>{console.log(result)})
      .catch((error)=>{console.log(error)})
    }
    const showEdit = (user)=>{
        setFormData({name: user.name, email: user.email,phone:user.phone,photo:'path',password:'' });
        setSelectId(user.id);
        UserRoles(user.id).then((res)=>{setUserRoles(res.data.roles)})
        .catch((error)=>{console.log(error)});
        setShow(true);
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
      <a className='btn btn-primary m-2' onClick={()=>{setSelectId(null);setShow(true)}}>Add USER</a>
      <a className='btn btn-primary m-2' onClick={()=>{setSelectId(null);setShow(true)}}>Add ROLE</a>
      <a className='btn btn-primary m-2' onClick={()=>{console.log(Token)}}>Add PERMISSION</a>
      <UsersTable usersData={users} showEdit={showEdit} handleDelete={handleDelete}/>
      <UserForm show={show} setShow={setShow} selectId={selectId} formData={formData} userRoles={userRoles}
      roles={roles} setRoleId={setRoleId} handleAdd={handleAdd} handleEdit={handleEdit} handleChange={handleChange}/>
    </div>
    )
}