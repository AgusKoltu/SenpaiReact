import react, { useState } from 'react'
import * as utils from '../assets/JS/Validadores'
import '../assets/PrincipalStyle.css'
import FeatherIcon from 'feather-icons-react'



const Contacto = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [nameError, setNameError] = useState("")
    const [mailError, setMailError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [correct, setCorrect] = useState(false)

    const validation = () => {
        ((utils.validateEmail(mail)   || utils.validateTelephone(phone) || utils.validateNameOrLast(name) ?  setCorrect(false)   :  setCorrect(true) ) )
        Update();
    }
    const Update = () =>{
        setNameError(utils.validateNameOrLast(name))
        setMailError(utils.validateEmail(mail))
        setPhoneError(utils.validateTelephone(phone))
    }

    return (
    <main>
        <div className="container_contact">

            <div className="formulario">
                <form className="contact_form">
                    <h2 className="contact_title"> Envianos un mensaje </h2>
                    
                    <div className="casillero">
                        <input className="input1" type="text" name="name" placeholder="Nombre Completo" onChange={e => setName (e.target.value)} value={name}/> 
                    </div>
                    {
                        nameError && (
                            <div  style={{textAlign: "center"}}className="invalid-feedback d-block">
                                El nombre ingresado no es valido.
                            </div>
                        )
                    }
                    
                   

    
                    <div className="casillero">
                        <input className="input1" type="text" name="email" placeholder="Mail" onChange={e => setMail (e.target.value)} value={mail}/>
                       
                    </div>

                    {
                        mailError && (
                            <div  style={{textAlign: "center"}}className="invalid-feedback d-block">
                                El mail ingresado no es valido.
                            </div>
                        )
                    }
    
                    <div className="casillero">
                        <input className="input1" type="text" name="phone" placeholder="Telefono" onChange={e => setPhone (e.target.value)} value={phone}/>
                       
                    </div>

                    {
                        phoneError && (
                            <div  style={{textAlign: "center"}}className="invalid-feedback d-block">
                                El telefono ingresado no es valido.
                            </div>
                        )
                    }
    
                    <div className="casillero">
                        <textarea className="input1" name="message" placeholder="Tu mensaje"></textarea>
                    </div>
    
                    <div className="btn_contacto_container">
                        <button type="button" className="btn_contacto" onClick={() => validation()}> 
                            <span>
                            <FeatherIcon icon="send" />
                                Enviar
                            </span>
                        </button>
                    </div>
                    {
                           correct && (
                        <div  style={{textAlign: "center"}}className="valid-feedback d-block">
                            Su mensaje a sido envido con exito!
                        </div>
                        )
                    }
                </form>
            </div>
        </div>
    </main>
   
   )

}

export default Contacto