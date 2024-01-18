import React,{useState,useEffect} from 'react'
import { UsersData,AddUser,EditUser,DeleteUser } from './../APIs/users'
import { useContext } from "react";
import { TokenContext } from '../context/token';
import UsersTable from '../components/users/usersTable';
import UserForm from '../components/users/usersForm';
import { useNavigate } from "react-router-dom";
import { RolesData,AssignRole,UserRoles ,AddRole} from '../APIs/roles';
import { AddPermission } from '../APIs/permissions';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'; 

export default function Dashboard() {
  const navigate = useNavigate()
  const { Token , setToken }  = useContext(TokenContext);
  const[refresh,setRefresh] = useState(false);
  const[showRole,setShowRole] = useState(false);
  const[showPer,setShowPer] = useState(false);
  const[perName,setPerName] = useState('');
  const[roleName,setRoleName] = useState('');
  const[users,setUsers] = useState([]);
  const[roles,setRoles] = useState([]);
  const[roleId,setRoleId] = useState(null);
  const[show,setShow] = useState(false);
  const[selectId,setSelectId] = useState(null);
  const[image,setImage] = useState(null);
  const handleImage = (e)=>{
    setImage(e.target.files[0]);
  }
  const [formData, setFormData] = useState({ name: '', email: '',phone:'',password:'' });
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
        }, [refresh]);
      
    const handleDelete = (id)=>{
      DeleteUser(Token,id)
      .then((result)=>{console.log(result)})
      .catch((error)=>{console.log(error)})
    }
    const showEdit = (user)=>{
        setFormData({name: user.name, email: user.email,phone:user.phone,password:'' });
        setSelectId(user.id);
        UserRoles(user.id).then((res)=>{setRoleId(res.data.roles[0].id)})
        .catch((error)=>{console.log(error)});
        setShow(true);
      }
    
    const handleEdit = async (e,id)=>{
      e.preventDefault();
      let data=formData;
      data.photo=image
      EditUser(Token,id,data)
      .then((result)=>{
        AssignRole(Token,{user:id,role:roleId})
        .then((result)=>{console.log(result)})
        .catch((error)=>{console.log(error)});
        setFormData({name: '', email: '',phone:'',password:'' });
        setImage(null);
        setRefresh(!refresh);
        setSelectId(null);
        setShow(false);
    })
      .catch((error)=>{console.log(error)});
    }
    const handleAddClick =()=>{
      setFormData({ name: '', email: '',phone:'',password:'' });
      setSelectId(null);
      setShow(true)
    }
    const handleAdd = async (e)=>{
      e.preventDefault();
      let data=formData;
      data.photo=image
      console.log(data)
      AddUser(Token,data)
      .then((result)=>{
        AssignRole(Token,{user:result.data.id,role:roleId})
        .then((result)=>{console.log(result)})
        .catch((error)=>{console.log(error)});
        setRefresh(!refresh);
        setImage(null);
        setShow(false)
      })
      .catch((error)=>{console.log(error)});
      
      
    }
    return (
    <div className='container'>
      <a className='btn btn-primary m-2' onClick={()=>{handleAddClick()}}>Add USER</a>
      <a className='btn btn-primary m-2' onClick={()=>{setShowRole(true)}}>Add ROLE</a>
      <a className='btn btn-primary m-2' onClick={()=>{setShowPer(true)}}>Add PERMISSION</a>
      <UsersTable usersData={users} showEdit={showEdit} handleDelete={handleDelete}/>
      <UserForm show={show} setShow={setShow} selectId={selectId} formData={formData} roleId={roleId} handleImage={handleImage}
      roles={roles} setRoleId={setRoleId} handleAdd={(e)=>handleAdd(e)} handleEdit={handleEdit} handleChange={handleChange}/>
      <Modal show={showRole} onHide={()=>{setShowRole(false)}} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><span> Add Role</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="baseCost">name</span>
            <input type="text" class="form-control" required name='name'
            onChange={(e)=>{setRoleName(e.target.value)}}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' 
          onClick={(e) => {AddRole(Token,{name:roleName})
          .then((res)=>{setRefresh(!refresh);setShowRole(false)})
          .catch((error)=>{console.log(error);console.log(roleName)})}}>
            Add Role
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showPer} onHide={()=>{setShowPer(false)}} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><span> Add Permission</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mx-auto w-50 my-3">
            <span className="input-group-text" for="baseCost">name</span>
            <input type="text" class="form-control" required name='name'
            onChange={(e)=>{setPerName(e.target.value)}}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' 
          onClick={(e) => {AddPermission(Token,{name:perName})
          .then((res)=>{setRefresh(!refresh); setShowPer(false)})
          .catch((error)=>{})}}>
            Add Permission
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}