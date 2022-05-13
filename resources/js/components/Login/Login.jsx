import React,{useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';

const Login = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();
    const headers = {'Authorization': $('meta[name="csrf-token"]').attr('content')}
      const enviar = ({email,password},e) => {
        e.preventDefault();

        axios.post('api/login/',{email,password},headers).then(({data,status}) => {
          if(status === 200)
             navigate(data.path);
            
        });
      }


    return (
        <>




  
        </>
    )
}

export default Login
