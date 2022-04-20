import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from "axios";

const Create = () => {
    const [Form, setForm] = useState({
        "name":"",
        "email":"",
        "pass":"",
        "rptPass":""
    });
    let navigate = useNavigate();
    const [Name, setName] = useState([])
    const [Email, setEmail] = useState([]);
    const [Pass, setPass] = useState([])
    const [rptPass, setrptPass] = useState([])
    const sendForm = async(e) =>{
        e.preventDefault();
        
        try {
            let datos = await Axios.post('api/user',{
                Form                             
            })
            let {error,ok,route} = datos.data;
                if(ok === 422){
                     throw error
                }else{
                    navigate(route)
                }
        } catch ({name,email,pass,rptPass}) {
                if(name !== undefined) {
                    name.map(elem => setName([...Name,elem]));
                    
                }
                if(email !== undefined){
                     email.map(elem => setEmail([...Email,email]));
                }
                if(pass !== undefined){
                    pass.map((elem) => setPass([...Pass,elem]))
                }

                if(rptPass !== undefined){
                    rptPass.map((elem) => setrptPass([...rptPass,elem]))
                }
                setInterval(() => {
                    setName([]);
                    setEmail([]);
                    setPass([])
                    setrptPass([])
                },7000);
        }
    }

    const Validation = ({elem}) => {

        return(
            <>
              <p style={{color:"red"}}>{elem}</p>
            </>
        )

    }

    return (
        <>
        <div className="card">
        <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
            <form  onSubmit={e => sendForm(e)}>
            <div className="input-group mb-3">
                <input type="text"
                 onChange={e => setForm({...Form,[e.target.id]:e.target.value})} 
                 id="name" 
                 value={Form.name}
                 className={`form-control ${(Name.length > 0) ? "is-invalid":""}`}
                 placeholder="Full name" />
                <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-user" />
                </div>
                <br></br>
                {Name && Name.map((elem,index) => <Validation key={index} elem={elem}/>)}

                </div>
            </div>
            <div className="input-group mb-3">
                <input type="email" 
                 id="email" 
                 onChange={e => setForm({...Form,[e.target.id]:e.target.value})} 
                 className={`form-control ${(Email.length > 0) ? "is-invalid":""}`}
                 placeholder="Email" />
                <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-envelope" />
                </div>
                {Email && Email.map((elem,index) => <Validation key={index} elem={elem}/>)}
                </div>
            </div>
            <div className="input-group mb-3">
                <input type="password" 
                 id="pass"
                 onChange={e=>setForm({...Form,[e.target.id]:e.target.value})}
                 className={`form-control ${(Pass.length > 0) ? "is-invalid":""}`}
                 placeholder="Password" />

                <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
                {Pass && Pass.map((elem,index) => <Validation key={index} elem={elem}/>)}
                </div>
            </div>
            <div className="input-group mb-3">
                <input 
                 type="password" 
                 placeholder="Retype password" 
                 id="rptPass"
                 className={`form-control ${(rptPass.length > 0) ? "is-invalid":""}`}
                 onChange={e=>setForm({...Form,[e.target.id]:e.target.value})}/>
                <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
                {rptPass && rptPass.map((elem,index) => <Validation key={index} elem={elem}/>)}
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                <div className="icheck-primary">
                    <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                    <label htmlFor="agreeTerms">
                    I agree to the <a href="#">terms</a>
                    </label>
                </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                </div>
                {/* /.col */}
            </div>
            </form>
            
            <Link to="/" className="btn btn-info">Atras</Link>
        </div>
        {/* /.form-box */}
        </div>

        </>
    )
}

export default Create