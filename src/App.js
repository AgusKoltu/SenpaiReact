import PreHeader from './components/PreHeader'
import Header from './components/Header'
import Index from './components/Index'
import Footer from './components/Footer'
import Tienda from './components/Tienda'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Galeria_Rival from './components/Galeria_Rival';
import Estadisticas from './components/Estadisticas'
import Login from './components/Login'
import Register from './components/Register'
import Default from './components/Default'
import ScrollToTop from './components/ScrollToTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect,useState} from 'react'

import { ModalBody } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>


function App() {
  const [Carrito, setCarrito] = useState([]);
  const [Total, setTotal] = useState(0);
  const [Cantidad, setCantidad] = useState(0);
  const [Pay, setPay] = useState(false);


  const addToCart = (props) => {
    let index = Carrito.indexOf(props);
    setCantidad(Cantidad + 1);
    setTotal( Total + props.precio);
    if(index != -1){
      Carrito[index].cantidad++;
      setCarrito(Carrito);
      
    }
    else{
    setCarrito(Carrito.concat(props));
    setPay(true);
    }
}
const outOfCart = (props) => {
  let index = Carrito.indexOf(props);
  
  setTotal( Total - (props.precio * props.cantidad));
  setCantidad(Cantidad - props.cantidad);
  Carrito[index].cantidad = 1;
  setCarrito(Carrito);
  let aux = Carrito;
 
  aux.splice(index,1);
  if(Carrito.length === 0) setPay(false)
  else setPay(true)


  setCarrito(aux);
}



  return (
    <body>
      
     

      
      <Router>
      <PreHeader carrito={Carrito}  pay={Pay} total ={Total} cantidad = {Cantidad} outOfCart={outOfCart}></PreHeader>
        <ScrollToTop/>
        <Header></Header>

        <Switch>
            <Route path exact="/">
              <Index/>
            </Route>
            <Route path ="/Login">
              <Login/>
            </Route>
            <Route path ="/Register">
              <Register/>
            </Route>
            <Route path="/Estadisticas">
              <Estadisticas/>
            </Route>
            <Route path="/Contacto">
              <Contacto/>
            </Route>
             <Route path="/Galeria">
              <Galeria/>
            </Route>
            <Route path="/Galeria_Rival/:equipo" render={props => 
               <Galeria_Rival {...props}/>}>
             
            </Route>
            <Route path="/Tienda">
              <Tienda addToCart={addToCart}/>
            </Route>
            <Route path="/Default">
              <Default/>
            </Route>
              
        </Switch>

        <Footer/> 
      </Router>
          



    </body>
  );
}

export default App;