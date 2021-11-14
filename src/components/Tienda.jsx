import react from 'react'
import '../assets/ShopHeader.css'
import '../assets/PrincipalStyle.css'
import FeatherIcon from 'feather-icons-react'
import React, {useEffect,useState} from 'react'
import ReactLoading from 'react-loading'


const Tienda = (props) => {
    const [Productos, setProductos] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [hasError, setHasError] = useState(false);
    const [Loading, setLoading] = useState(true);
   
    



    useEffect(()=>{
        fetch('http://localhost:4000/productos')
        .then((data) => data.json())
        .then(data => {
            setProductos(data);
            setHasError(false);
            setLoading(false);
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

        <main className="main">
            <div className="container">
                <div className="small_cell">
                    <hr className="border_cell"  id="border1"/> 
                    <h2 id="border2">Nuestros Productos </h2>
                    <hr className="border_cell" id="border3"/> 
                </div>
                <div className="loading_container" >
                    {
                        Loading && (
                            <ReactLoading type={'spin'} color={"black"}></ReactLoading> 
                        )
                    }
                    </div>
               
               
                <section id='product-holder' className="container-products">
               
                
                {

                Productos.map(producto =>{
                        let ide = producto.id;
                        
                        return (
                        
                        <div className="product">
                            <div className="product__content">
                                <img src={require('../assets/Fotos/Productos/producto_' + ide + '.png').default}   alt="" className="product__img"/>
                                <div className="product__description">
                                    <h3 className="product__title">{producto.nombre} </h3>
                                    <span className="product__price">${producto.precio}</span><br/>
                                    <button  onClick={()=> props.addToCart(producto)}  className="button button1">Agregar al Carrito</button>
                                </div>
                            </div>   
                        </div>
                        )
                    })
                
                }
                </section>
            </div>       
        </main>
    
   )

}

export default Tienda




