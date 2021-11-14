import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import FeatherIcon from 'feather-icons-react'
  import * as utils from '../assets/JS/Validadores'
  import react, { useState } from 'react'

const Register = () => {
    
    return ( 
        <main className="form-page" id="register-page">

        <form className="text-center py-5 px-4 m-3 bg-white shadow rounded">
            <h3>Torpe Shop</h3>
            <h5 className="fw-light">Registro</h5> 
            <div className="border-top my-4"></div>

            <div className="form-tab active">
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="emailInput" placeholder="Correo electrónico"/>
                <label for="emailInput">Correo electrónico</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="passwordInput" placeholder="Contraseña"/>
                <label for="passwordInput">Contraseña</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="passwordConfirmInput" placeholder="Confirmación de la contraseña"/>
                <label for="passwordConfirmInput">Confirmación de la contraseña</label>
            </div>
            </div>

            <div className="form-tab">
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="nombreInput" placeholder="Nombre"/>
                <label for="nombreInput">Nombre</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="apellidoInput" placeholder="Apellido"/>
                <label for="apellidoInput">Apellido</label>
            </div>
            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="nacimientoInput" placeholder="Fecha de nacimiento"/>
                <label for="nacimientoInput">Fecha de nacimiento</label>
            </div>
            </div>

            <button className="btn btn-secondary rounded-circle" id="prev-button">
            <FeatherIcon icon="arrow-left" className="fas fa-arrow-left" style={{padding: "5px 0"}}></FeatherIcon>
            </button>
            <button className="btn btn-lg btn-primary w-100 mt-2" id="next-button">Siguiente</button>
            <button type="submit" className="btn btn-lg btn-primary w-100 mt-2" id="register-button">Registrarme</button>
            <p className="mt-3" id="registered-text">¿Ya estás registrado? <Link to="/Login" className="text-decoration-none">Entrar</Link></p>

        </form>

        </main>
        )

}

export default Register