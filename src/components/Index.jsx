import react from 'react'
import '../assets/PrincipalStyle.css'
import FeatherIcon from 'feather-icons-react'
import FotoLogo from '../assets/Fotos/Escudo.png'
import { ExternalLink } from 'react-external-link';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Index = () => {
    return ( 
    <main>
        <div className="container_slider">
            <div className="slider" id="slider">
                <div className="slider_section">
                    <img src={require('../assets/Fotos/Slider_Principal/jose_pc.jpg').default} alt="" className="slider_img"/>   
                    <img src={require('../assets/Fotos/Slider_Principal/jose_tablet.jpg').default} alt="" className="slider_img_tablet"/>
                    <img src={require('../assets/Fotos/Slider_Principal/jose_cel.jpg').default} alt="" className="slider_img_phone"/> 
                    <div className="txt">
                        <h1>Galería</h1>
                        <h2>Ultimo encuentro</h2><br/><br/><p>Ya se encuentran disponibles las imagenes exclusivas de la pasada fecha</p>
                        
                    </div> 
                    <div className="btn_slider">
                        <Link to="/Galeria_Rival/Toro" className="btn" >
                            VER MAS
                        </Link>
                    </div> 
                 </div> 
                <div className="slider_section">
                    <img src={require('../assets/Fotos/Slider_Principal/Chela_pc.jfif').default} alt="" className="slider_img"/>
                    <img src={require('../assets/Fotos/Slider_Principal/Chela_tablet.jpg').default} alt="" className="slider_img_tablet"/>
                    <img src={require('../assets/Fotos/Slider_Principal/Chela_cel.jpg').default} alt="" className="slider_img_phone"/> 
                    <div className="txt">
                        <h1>Tienda</h1>
                        <h2>La Torpechela</h2><br/><br/><p>La bebida oficial del equipo ya se encuentra disponible en nuestra tienda oficial, no te pierdas de esta linea exclusiva llevada a cabo con nuestros amigos de Merlin</p>
                        
                    </div>
                    <div className="btn_slider">
                        <Link to="/Tienda" className="btn" >
                            VER MAS
                        </Link>
                    </div>  
                </div>
                <div className="slider_section">
                    <img style={{objectFit: "cover"}} src={require('../assets/Fotos/Slider_Principal/Bruno_pc.jfif').default} alt="" className="slider_img"/>
                    <img style={{objectFit: "cover"}} src={require('../assets/Fotos/Slider_Principal/Bruno_tablet.png').default} alt="" className="slider_img_tablet"/>
                    <img style={{objectFit: "cover"}} src={require('../assets/Fotos/Slider_Principal/Bruno_cel.jfif').default} alt="" className="slider_img_phone"/>  
                    <div className="txt">
                        <h1>Noticia</h1>
                        <h2>Rueda de prensa</h2><br/><br/><p>Luego de un brillante encuentro, el delantero torpecino analiza el gran momento por el que esta pasando el equipo</p>
                    </div> 
                    <div className="btn_slider">
                        <ExternalLink href="http://www.ligasiete.com.uy/articulo/340/montevideo-ctorpe-5-0-Vamos-chino" target="_blank" className="btn" >
                            VER MAS
                        </ExternalLink>
                    </div> 
                </div>
                <div className="slider_section">
                    <img src={require('../assets/Fotos/Slider_Principal/Sorteo_pc.jfif').default} alt="" className="slider_img"/>
                    <img src={require('../assets/Fotos/Slider_Principal/Sorteo_tablet.jfif').default} alt="" className="slider_img_tablet"/>
                    <img src={require('../assets/Fotos/Slider_Principal/Sorteo_cel.jfif').default} alt="" className="slider_img_phone"/> 
                     
                    <div className="txt">
                        <h1>Noticia</h1>
                        <h2>Sorteo</h2><br/><br/><p>Luego de cumplir mas de 1 año de existencia, la torpeneta agradece a su gente con un grandes premios!</p>
                      
                    </div> 
                    <div className="btn_slider">
                        <ExternalLink href="https://www.instagram.com/p/CTijk-WD6RE/" target="_blank" className="btn" >
                            VER MAS
                        </ExternalLink>
                    </div> 
                 </div>
               
            </div>
            
            <div className="slider_btn slider_btn_right" id="btn_right" ><FeatherIcon className="icon_slider" icon="chevron-right"/></div>
            <div className="slider_btn slider_btn_left" id="btn_left" ><FeatherIcon className="icon_slider" icon="chevron-left"/></div>
        </div>
        <section className="section1">
            
            <div className="tabla_liga"   style={{overflowX: "auto"}}>
                <h2 className="titulo_partido" style={{textAlign: "center"},{ backgroundColor: "skyblue"}}>APERTURA 2021</h2>
                <table>
                  <tr>
                    <th>Pos</th>
                    <th>Equipo</th>
                    <th>Puntos</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>La Costa</td>
                    <td>24</td>
                    
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>De Rabona</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Stark</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Insein</td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>La Marea</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Funebreros</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Del Vamos</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Romario</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Tokio</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Salus</td>
                    <td>6</td>
                  </tr>
                  <tr id="tr_torpe">
                    <td>11</td>
                    <td>Torpe</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Vagoneta</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Vamos</td>
                    <td>0</td>
                  </tr>
                </table>
            </div>
            <article className="partidos">
                
                <div className="partido_anterior">
                    <h2 className="titulo_partido">Partido Anterior</h2>
                    <div className="partido_info">
                        <img className="img_partido" src={require('../assets/Fotos/torpe.png').default} alt=""/>
                        <h3>5.0</h3>
                        <img className="img_partido" src={require('../assets/Fotos/Escudos_Rivales/Toro.png').default} alt=""/>
                    </div>
                </div>
               
                
                <div className="partido_siguiente">
                     <h2 className="titulo_partido">Proximo Partido</h2>
                     <div className="partido_info">
                         <img className="img_partido" src={require('../assets/Fotos/torpe.png').default} alt=""/>
                         <h3>VS</h3>
                         <img className="img_partido" src={require('../assets/Fotos/Escudos_Rivales/La_marea.png').default} alt=""/>
                     </div>
                </div>
               

                <div className="otros_partidos">
                    <h2 className="titulo_partido">Otros Partidos</h2>
                    <div className="lista_partidos">
                        
                        <div className="partido_info">
                            <img className="img_otro_partido" src={require('../assets/Fotos/torpe.png').default} alt=""/>
                            <h3>3.3</h3>
                            <img className="img_otro_partido" src={require('../assets/Fotos/Escudos_Rivales/Romario.png').default} alt=""/>
                        </div>
                      
                      
                        <div className="partido_info">
                            <img className="img_otro_partido" src={require('../assets/Fotos/torpe.png').default} alt=""/>
                            <h3>4.4</h3>
                            <img className="img_otro_partido" src={require('../assets/Fotos/Escudos_Rivales/Insein.png').default} alt=""/>
                        </div>
                       
                        <div className="partido_info">
                            <img className="img_otro_partido" src={require('../assets/Fotos/torpe.png').default} alt=""/>
                            <h3>1.6</h3>
                            <img className="img_otro_partido" src={require('../assets/Fotos/Escudos_Rivales/Stark.png').default} alt=""/>
                        </div>
                       
                        <div className="partido_info">
                            <img className="img_otro_partido" src={require('../assets/Fotos/torpe.png').default} alt=""/>
                            <h3>1.3</h3>
                            <img className="img_otro_partido" src={require('../assets/Fotos/Escudos_Rivales/vamo.png').default} alt=""/>
                        </div>
                        
                        <div className="partido_info">
                            <img className="img_otro_partido" src={require('../assets/Fotos/torpe.png').default} alt=""/>
                            <h3>1.2</h3>
                            <img className="img_otro_partido" src={require('../assets/Fotos/Escudos_Rivales/tokio.png').default} alt=""/>
                        </div>
                       
                        <div className="partido_info">
                            <img className="img_otro_partido" src={require('../assets/Fotos/torpe.png').default} alt=""/>
                            <h3>1.4</h3>
                            <img className="img_otro_partido" src={require('../assets/Fotos/Escudos_Rivales/funebreros.png').default} alt=""/>
                        </div>
                        
                    </div>

                </div>


            </article>







        </section>
            
        
    </main>
    
   )

}

export default Index