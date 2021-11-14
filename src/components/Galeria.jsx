import react from 'react'
import '../assets/GaleryStyle.css'
import '../assets/PrincipalStyle.css'
import FeatherIcon from 'feather-icons-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Galeria_Rival from './Galeria_Rival';
import React, {useEffect,useState} from 'react'
import Footer from './Footer';
import ReactLoading from 'react-loading'



    const Galeria = () => {
        const [Rivales, setRivales] = useState([])
        const [errorMessage, setErrorMessage] = useState('');
        const [hasError, setHasError] = useState(false);
        const [Loading, setLoading] = useState(true);

    
        useEffect(()=>{
            
            fetch('http://localhost:4000/rivales')
    
            .then((data) => data.json())
            .then(data => {
                setLoading(false);
                setRivales(data);
                setHasError(false);
            }
            )
            .catch(e=> {
                setLoading(false);
                setErrorMessage(e); 
                setHasError(true)
            }
            )
        },[]) 

    return (
        <main>
            
         
            <div className="container_galeria">
                        <div className="small_cell">
                            <hr className="border_cell"  id="border1"/> 
                            <h2 style={{textAlign: "center"}} id="border2">Nuestra Galería</h2>
                            <hr className="border_cell" id="border3"/> 
                        </div>
                        <div className="loading_container">
                        {
                            Loading && (
                                <ReactLoading type={'spin'} color={"black"}></ReactLoading> 
                            )
                        }
                        </div>
                    <div className="container_rivales">
                        {
                        Rivales.map(rival =>{
                               
                            let equipo = rival.equipo;
                            let imagen = rival.imagen;
                            let nombre = rival.nombre;
                            let fecha = rival.fecha;
                            let disponible = rival.disponible;
                            return ( 
                                
                                disponible && (
                            <Link to={'Galeria_Rival/' + equipo}>
                                <div className="rival">
                                    <div className="rival_content">
                                        <img src={require('../assets/Fotos/Escudos_Rivales/' + imagen + '.png').default} alt="" className="rival_img"/>
                                        <div className="rival__description">
                                            <h3 className="rival__title">VS {nombre} <br/> Fecha {fecha}  <br/> Aperura 2021</h3>     
                                        </div>
                                    </div>
                                </div>
                            </Link>
                                )
                                
                            
                            )
                            
                        })
                        
                        }


{
                        Rivales.map(rival =>{
                               
                           
                            let imagen = rival.imagen;
                            let nombre = rival.nombre;
                            let fecha = rival.fecha;
                            let disponible = rival.disponible;
                            return ( 
                                
                                !disponible && (
                            <Link to='/Default'>
                                <div className="rival">
                                    <div className="rival_content">
                                        <img src={require('../assets/Fotos/Escudos_Rivales/' + imagen + '.png').default} alt="" className="rival_img"/>
                                        <div className="rival__description">
                                            <h3 className="rival__title">VS {nombre} <br/> Fecha {fecha}  <br/> Aperura 2021</h3>     
                                        </div>
                                    </div>
                                </div>
                            </Link>
                                )
                                
                            
                            )
                            
                        })
                        
                        }
                       
                    </div>
                </div>


                   
                   
                    
        
            
        </main>
    
   )

}


export default Galeria