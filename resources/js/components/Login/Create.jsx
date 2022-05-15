import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';

const Create = () => {
    
    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = async (datos) =>{

        await axios.post('api/auth/register',datos)
                 .then(({data}) => {
                     
                     
                     if(data.error === "las Contraseña no coinciden"){
                        toastr.error(data.error)
                     }else{
                        toastr.success(data.message)
                        setInterval(() => {
                            window.location.href= data.to
                        },3000);
                    
                     }
                 });            
    }

    return (
        <>
        <div className="card">
        <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
                <input type="text"  

                 name='name'
                 {...register("name",{
                     required:{
                         value:true,
                         message:"es requerido"
                     }
                 })}
                 className={`form-control ${errors?.name ? 'is-invalid':""}`}
                 placeholder="Full name" />
                <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-user" />
                </div>
                <span className="text-danger">{errors?.name?.message}</span>
                </div>
            </div>
            <div className="input-group mb-3">
                <input type="email" 
                 id="email"
                 name="email" 
                 {...register("email",{
                     required:{
                         value:true,
                         message:"es requerido"
                     }
                 })}
                 className={`form-control ${errors?.email ? 'is-invalid':""}`}
                 placeholder="Email" />
                <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-envelope" />
                </div>
                <span className="text-danger">{errors?.email?.message}</span>
                </div>
            </div>
            <div className="input-group mb-3">
                <input type="password" 
                 id="pass"
                 name="pass"
                 {...register("pass",{
                     required:{
                         value:true,
                         message:"es requerido"
                     }
                 })}
                 className={`form-control ${errors?.pass ? 'is-invalid':""}`}
                 placeholder="Password" />
                <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
                <span className="text-danger">{errors?.pass?.message}</span>
                </div>
            </div>
            <div className="input-group mb-3">
                <input 
                 type="password" 
                 name="rptPass"
                 {...register("rptPass",{
                    required:{
                        value:true,
                        message:"es requerido"
                    }
                })}
                 className={`form-control ${errors?.rptPass ? 'is-invalid':""}`}
                 placeholder="Retype password" 
                 />
                <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
                <span className="text-danger">{errors?.rptPass?.message}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                <div className="icheck-primary">
                    <input type="checkbox"
                     id="agreeTerms"
                     name="terms"
                     {...register("terms",{
                        required:{
                            value:true,
                            message:"es requerido"
                        }
                    })}
                   defaultValue="agree" />
                    <label htmlFor="agreeTerms">
                    I agree to the <a href="#">terms</a>
                    </label>
                </div>
                <span className="text-danger">{errors?.terms?.message}</span>
                </div>
                
                <div className="col-4">
                <button 
                 type="submit" 
                 className="btn btn-primary btn-block btn-flat">Register</button>
                </div>
                
            </div>
            </form>
            
            <Link to="/" className="btn btn-info">Atras</Link>
        </div>
        
        </div>

        </>
    )
}

export default Create