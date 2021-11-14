import react from 'react'
import '../assets/ShopHeader.css'
import '../assets/PrincipalStyle.css'
import '../assets/Login.css'
import FeatherIcon from 'feather-icons-react'
import FotoLogo from '../assets/Fotos/Escudo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const PreHeader = (props) => {
    console.log(props.pay)

    return (
        
    <div className="header_usuario">
      <ul className="nav_usuario">
          <li className="user_menu_item"><Link to="/Login"> Mi cuenta</Link></li>
          <li className="user_menu_item">
               <div className="dropdown">
                   <button className="dropbtn"><FeatherIcon icon="shopping-cart"/><span style={{paddingLeft: "10px"}} id="total-products">{props.cantidad}</span></button>
                   <div className="dropdown-content">
                       <div className="carrito">
                           <h3>Mi Carrito</h3>
                           <ul id="cart-holder">
                                {
                                    props.carrito.map(producto =>{
                                        let id = producto.id;
                                        let name = producto.nombre;
                                        let quantity = producto.cantidad;
                                        let price = producto.precio
                                       

                                    return (

                                        <li className="item_cart">
                                                    
                                            <div className="item_image_container">
                                                <img  className="item_image" style={{height: "50px;"}}  src={require('../assets/Fotos/Productos/producto_' + id + '.png').default} alt="" />
                                            </div>
                                            <div className="cart_description">
                                                <p className="precio_p">{name}</p>
                                                <div className="cart_price">
                                                    <input type="number"disabled className="input_number"  value={quantity}/>
                                                    <p className="precio_p">${quantity * price}</p>
                                                </div>
                                            </div> 
                                            <div className="delete_container">   
                                                
                                                <button className="btn_borrar" onClick={()=> props.outOfCart(producto)}>QUITAR</button>
                                            </div>
                                        </li>
                                  
                                        )
                                    })
                                }
               
                           </ul>
                          
                           <p style={{textAlign: "center"}}>Subtotal del carrito:: $<span id="total-holder">{props.total}</span></p>
                           <div className="container_pagar">
                           {
                              
                                props.pay && (
                                    <a href="#" class="btn_pagar" > IR A PAGAR </a> 
                                )
                            }
                    
                           
                              <span id="pagar"></span>
                           </div>
                        </div> 
                    </div>
                </div>
           </li>
      </ul>
   </div>
   )

}

export default PreHeader