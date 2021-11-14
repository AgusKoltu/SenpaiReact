import React, {useEffect,useState} from 'react'
import '../assets/PrincipalStyle.css'
import '../assets/ShopHeader.css'
import FeatherIcon from 'feather-icons-react'
import FotoLogo from '../assets/Fotos/Escudo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// const elBoton = document.querySelector(".btn_hamburguer");
// const navMenu = document.querySelector(".nav_1");
// elBoton.addEventListener("click", () =>  {
//     navMenu.classList.toggle("nav_menu_visible");
// });




const Header = () => {
    
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };






    return (
    

    <header>
        <img className ="logo" src={FotoLogo} width = "100"  alt="rr"/>
        <nav>
            <ul className="nav_1 nav_menu_visible"> 
                <li className = "nav_menu_item">
                    <Link to="/" className="nav_menu_link"><FeatherIcon icon="home" id="icono_1" className="icon_menu" />INICIO</Link></li>
                <li className = "nav_menu_item">
                    <Link to="/Estadisticas" className="nav_menu_link"><FeatherIcon icon="file-text" id="icono_2" className="icon_menu" /> ESTADISTICAS</Link></li>
                <li className = "nav_menu_item">
                     <Link to="/Galeria" className="nav_menu_link" ><FeatherIcon icon="camera" id="icono_3" className="icon_menu" />GALERIA</Link></li>
                <li className ="nav_menu_item">
                     <Link to="/Tienda" className="nav_menu_link"><FeatherIcon icon="shopping-bag" id="icono_4" className="icon_menu" />TIENDA</Link></li>
                <li className = "nav_menu_item">
                     <Link to="/Contacto" className="nav_menu_link"><FeatherIcon icon="phone" id="icono_5" className="icon_menu" />CONTACTO</Link></li>
            </ul>
        </nav>
        <a className ="boton" href="#"><button className="btn_hamburguer" ><FeatherIcon icon="align-justify" className="icon_despliegue" /></button> </a>
    </header>
    
    )

}

export default Header


