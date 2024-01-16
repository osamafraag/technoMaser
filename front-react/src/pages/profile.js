import React,{useState,useEffect} from 'react'
import { UsersData } from './../APIs/users'
import { useContext } from "react";
import { TokenContext } from '../context/token';

export default function Dashboard() {
  const { contextToken , setContextToken }  = useContext(TokenContext)
    const[users,setUsers] = useState([]);

    useEffect(() => {
        UsersData()
          .then((result) => {
            setUsers(result.data)
          })
          .catch((error) => console.log(error));
      
        }, []);
    return (
    <div className='container'>
    </div>
    )
}