import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import * as utils from '../assets/JS/Validadores'
  import React, { useState } from 'react'

const Login = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [mailError, setMailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [correct, setCorrect] = useState(false)

    const validation = () => {
       ((utils.validateEmail(mail)   || utils.validatePassword(password) ?  setCorrect(false)   :  setCorrect(true)))
        console.log(utils.validatePassword(password))
        console.log(password)
        Update();
    }
    const Update = () =>{
        setPasswordError(utils.validatePassword(password))
        setMailError(utils.validateEmail(mail))
       
    }



    return ( 
            <main className="form-page" id="login-page">
                
                <form className="text-center py-5 px-4 m-3 bg-white shadow rounded">
                <h3>Torpe Shop</h3>
                <h5 className="fw-light">Iniciar sesion</h5>
                <div className="border-top my-4"></div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="emailInput" name="emailInput" placeholder="Correo electonico" onChange={e => setMail (e.target.value)} value={mail}/>
                    <label for="emailInput">Correo electronico</label>
                    {
                        mailError && (
                            <div  style={{textAlign: "center"}}className="invalid-feedback d-block">
                                El mail ingresado no es valido.
                            </div>
                        )
                    }
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="passwordInput" name="passwordInput" placeholder="Contraseña" onChange={e => setPassword (e.target.value)} value={password}/>
                    <label for="passwordInput">Contraseña</label>
                    {
                        passwordError && (
                            <div  style={{textAlign: "center"}}className="invalid-feedback d-block">
                                La contraseña ingresada no es valida.
                            </div>
                        )
                    }
                </div>
                <button  type="button" onClick={() => validation()} className="btn  btn-primary w-100 mt-2" >Iniciar sesion</button>
                {
                           correct && (
                        <div  style={{textAlign: "center"}}className="valid-feedback d-block" >
                            NO ESTAS REGISTRADO
                        </div>
                        )
                    }
                <p className="mt-3">¿No tienes una cuenta? <Link to="/Register" className="text-decoration-none">Regi­strate</Link></p>
                </form>

            </main>
 )

}

export default Login