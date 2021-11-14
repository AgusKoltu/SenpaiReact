import react from 'react'
import '../assets/PrincipalStyle.css'
import FeatherIcon from 'feather-icons-react'
import Iframe from 'react-iframe'
import { ExternalLink } from 'react-external-link';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>


const Footer = () => {
    return (
    <footer>
        <div className="marcas">
            <div className="marca_arriba">
                <div className="escudo_arriba"> <img className="escudito" src={require('../assets/Fotos/torpe.png').default} width="200"  alt="fail"/></div> 
                <div className="escudo_abajo"></div>
            </div>
            <div className="marca_abajo">
                <div className="sponsors" id="s1"></div>
               
                <ExternalLink href="https://www.gonzalocastro.edu.uy " ><img src={require('../assets/Fotos/Sponsors/castro.png').default}  style={{width: "20vh"}} alt=""/></ExternalLink>
                <ExternalLink href="https://www.facundogarcia.com" ><img src={require('../assets/Fotos/Sponsors/Toti.png').default} style={{width: "15vh"}} alt=""/></ExternalLink>
                <div className="sponsors" id="s2"></div>
                <ExternalLink href="https://www.instagram.com/mjaequipamientos/?hl=es"  ><img src={require('../assets/Fotos/Sponsors/mja.png').default} alt=""/></ExternalLink>
                <ExternalLink href="http://www.ligasiete.com.uy"  ><img src={require('../assets/Fotos/Sponsors/logo.full.png').default} alt=""/></ExternalLink>
                <ExternalLink href="https://www.gonzalocastro.edu.uy" ><img src={require('../assets/Fotos/Sponsors/castro.png').default}   style={{width: "20vh"}} alt=""/></ExternalLink>
                <div className="sponsors" id="s3"></div>
                <ExternalLink href="http://www.ligasiete.com.uy"  ><img src={require('../assets/Fotos/Sponsors/logo.full.png').default} alt=""/></ExternalLink>
                <ExternalLink href="https://www.instagram.com/merlin_growshop/?hl=es"  ><img src={require('../assets/Fotos/Sponsors/merlin.png').default} alt=""/></ExternalLink>
                <ExternalLink href="https://www.facundogarcia.com"  ><img src={require('../assets/Fotos/Sponsors/Toti.png').default} style={{width: "15vh"}} alt=""/></ExternalLink>
                <ExternalLink href="https://www.instagram.com/mjaequipamientos/?hl=es"  ><img src={require('../assets/Fotos/Sponsors/mja.png').default} alt=""/></ExternalLink> 

            </div>
        </div>
        <div className="info">
            <div className="sep"></div>

            <div className="redes">
                <div className="col-sm-12 col-md-6 py-3" >
                    <h2>Donde encontrarnos</h2>
                    <p><FeatherIcon  icon="map-pin"/> Polideportivo Carrasco</p>   
                    <div className="embed-responsive embed-responsive-16by9" style={{width: "100%"}}>
                    
                        <Iframe url="https://maps.google.com/maps?q=polideportivo%20carrasco&t=&z=13&ie=UTF8&iwloc=&output=embed" className="embed-responsive-item" />
                      
                    </div>
                </div>
                <div className="informacion col-sm-12 col-md-6 py-3">
                    <div className="redes_contacto"  style={{height: "100%"}}>
                        <div style={{marginRight: "20px"}}>
                            <h2 >Redes sociales oficiales</h2>
                            <ul>
                            <li><ExternalLink href="https://www.instagram.com/mvdcitytorpe/?hl=es" ><FeatherIcon className="icon_menu" icon="instagram"/>  <b>Siguenos en instagram</b></ExternalLink></li>
                            <li><ExternalLink  href="https://twitter.com/citytorpe?lang=es"><FeatherIcon className="icon_menu" icon="twitter"/>  <b>Siguenos en twitter</b></ExternalLink></li> 
                            </ul>
                        </div>  
                        <div id="contacto_1" >
                            <h2>Informacion de contacto</h2>
                            <ul>
                                <li><a><FeatherIcon className="icon_menu" icon="mail"/>  <b>montevideocitytorpe@gmail.com</b></a></li>
                                <li><ExternalLink href="Contacto.html"><FeatherIcon className="icon_menu" icon="edit"/>  <b>Puedes escribirnos aqui</b></ExternalLink></li>
                            </ul>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>

        
        <div className="derechos">
            <div className="copiright">
                © 2021 Montevideo City Torpe 
            </div>   
            <div className="compania">
                <p><Link to="">Informacion de Compania</Link> | <Link to="">Privacion y politica</Link> | <Link to="">Terminos y condiciones</Link></p> 
            </div>
        </div>
       
    </footer>
   )

}

export default Footer