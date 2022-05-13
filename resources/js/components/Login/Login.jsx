import React,{useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';

const Login = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();

      const enviar = ({email,password},e) => {
        e.preventDefault();

        axios.post('api/login/',{
          email,password
        }).then(({data,status}) => {
          if(status === 200)
             navigate(data.path);
          
        });
      }


    return (
        <>

  <div class="card">
  <div className="card-body login-card-body">
    <p className="login-box-msg">Sign in to start your session</p>
    <form onSubmit={handleSubmit(enviar)}>
      <div className="input-group mb-3">
        <input 
          type="email" 
          name="email" 
          className="form-control" 
          placeholder="Email" 
          {...register('email')}
          />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-envelope" />
          </div>
        </div>
      </div>
      <div className="input-group mb-3">
        <input 
         type="password" 
         name="password"  
         className="form-control" 
         placeholder="Password" 
         {...register('password')}
         />
        
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-lock" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="icheck-primary">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">
              Remember Me
            </label>
          </div>
        </div>

        <div className="col-4">
          <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>

      </div>
    </form>
    <div className="social-auth-links text-center mb-3">
      <p>- OR -</p>
      <a href="#" className="btn btn-block btn-primary">
        <i className="fab fa-facebook mr-2" /> Sign in using Facebook
      </a>
      <a href="#" className="btn btn-block btn-danger">
        <i className="fab fa-google-plus mr-2" /> Sign in using Google+
      </a>
    </div>

    <p className="mb-1">
      <a href="#">I forgot my password</a>
    </p>
    <p className="mb-0">
      <Link to='create_user' className="text-center">Register a new membership</Link>
    </p>
  </div>
</div>

  
        </>
    )
}

export default Login
