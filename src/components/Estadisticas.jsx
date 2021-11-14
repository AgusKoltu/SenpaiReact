import react from 'react'
import '../assets/PrincipalStyle.css'
import FeatherIcon from 'feather-icons-react'
import { ExternalLink } from 'react-external-link';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Holtwood One SC"></link>

const Estadisticas = () => {
    return (
        <main>
            <div className="container_galeria">
                <div className="small_cell">
                    <hr className="border_cell"  id="border1"/>
                    <h2 style={{textAlign: "center"}} id="border2">Nuestro Plantel</h2>
                    <hr className="border_cell" id="border3"/> 
            </div> 

           <section className="container_golero">
                <div className="container_posicion" >
                    <h2>Goleros </h2>
                </div>
                <div className="jugadores">
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/110879/facundo-garcia" >
                        <div className="jugador">
                            
                            <div className="jugador_content" id="j1">
                                <h1 className="jugador_numero">12</h1>
                                <h4   className="jugador_nombre">FACUNDO <br/> GARCIA</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                </div>
            </section>

            <section className="container_defensas">
                <div className="container_posicion" >
                    <h2>Defensas </h2>
                </div>
                <div className="jugadores">
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/112882/agustin-borras">
                        <div className="jugador"> 
                            <div className="jugador_content" id="j2">
                                <h1 className="jugador_numero">2</h1>
                                <h4   className="jugador_nombre">AGUSTIN <br/> BORRAS</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/110875/rafael-schol" >
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">3</h1>
                                <h4   className="jugador_nombre">RAFAEL <br/> SCHOL</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/110876/jose-netto" >
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">8</h1>
                                <h4   className="jugador_nombre">JOSE <br/> NETTO</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/110866/agustin-avelino" >
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">14</h1>
                                <h4   className="jugador_nombre">AGUSTIN <br/> AVELINO</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/110868/gaston-latorre" >
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">25</h1>
                                <h4   className="jugador_nombre">GASTON <br/> LATORRE</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/110865/robert-pineiro" >
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">69</h1>
                                <h4   className="jugador_nombre">ROBERT <br/> PIÑEIRO</h4>
                            </div> 
                        </div>
                    </ExternalLink>     
                </div>
            </section>

            <section className="container_mediocampistas">
                <div className="container_posicion" >
                    <h2> Mediocampistas </h2>
                </div>
                <div className="jugadores">
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/111220/german-lopez">
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">10</h1>
                                <h4   className="jugador_nombre">GERMAN <br/> LOPEZ</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/112883/matias-cardozo" target="_blank">
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">7</h1>
                                <h4   className="jugador_nombre">MATIAS <br/> CARDOZO</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/110877/javier-gonzalez" target="_blank">
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">11</h1>
                                <h4   className="jugador_nombre">JAVIER <br/>GONZALEZ</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/110867/hernan-pitta" target="_blank">
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">5</h1>
                                <h4   className="jugador_nombre">HERNAN <br/> PITTA</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                    
                    
                </div>
            </section>

            <section className="container_delanteros">
                <div className="container_posicion" >
                    <h2>Delanteros </h2>
                </div>
                <div className="jugadores">
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/110869/kevin-ruiz" target="_blank">
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">0</h1>
                                <h4   className="jugador_nombre">KEVIN <br/> RUIZ</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                    <ExternalLink href="http://www.ligasiete.com.uy/jugador/110863/bruno-silveira" target="_blank">
                        <div className="jugador"> 
                            <div className="jugador_content" id="jx">
                                <h1 className="jugador_numero">21</h1>
                                <h4   className="jugador_nombre">BRUNO <br/> SILVEIRA</h4>
                            </div> 
                        </div>
                    </ExternalLink>
                </div>
            </section>
        </div>
    </main>
    
   )

}

export default Estadisticas