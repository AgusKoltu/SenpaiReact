import react from 'react'
import '../assets/GaleryStyle.css'
import '../assets/PrincipalStyle.css'
import FeatherIcon from 'feather-icons-react'
import React, {useEffect,useState} from 'react'
import ReactLoading from 'react-loading'





  const Galeria_Rival = (props) => {
    const [Imagenes, setImagenes] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [hasError, setHasError] = useState(false);
    const [Loading, setLoading] = useState(true);

    useEffect(()=>{
        console.log(props.match.params.equipo)
        fetch('http://localhost:4000/imagenes')

        .then((data) => data.json())
        .then(data => {
           
            setImagenes(data);
            setLoading(false);
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

       
       
        <div className="main_galery">
            <div id="title_galery">
                <h2 style={{textAlign: "center"}}>Imagenes del partido</h2>
            </div>
            <div className="loading_container" id="loading_rival">
                    {
                        Loading && (
                            <ReactLoading type={'spin'} color={"black"}></ReactLoading> 
                        )
                    }
             </div>
       
            <div id="row_galery">
            {   
                Imagenes. filter(imagen => imagen.equipo === props.match.params.equipo).map(imagen =>{
                        let foto = imagen.foto;
                        let rival = imagen.equipo;
                       
                        return (
                         
                        <div className="column_galery">
                            <img  src={require('../assets/Fotos/Template_Galery/' + rival + '/Foto' + foto + '.jpg').default}  className="img_galery hover-shadow cursor"/>
                        </div>
                          
                        )
                    })
                
                }
               
            </div>
       
        </div>
       
        <div id="myModal" className="modal_galery">
            <span className="close cursor" onclick="closeModal()">&times;</span>
            <div id="modal_content">
            
            {
               Imagenes.filter(imagen => imagen.equipo === props.match.params.equipo).map(imagen =>{
                        let foto = imagen.foto;
                        let rival = imagen.equipo;
                        return (
                        <div className="mySlides"> 
                            <div className="numbertext">{foto} / 16</div>
                            <img  src={require('../assets/Fotos/Template_Galery/' + rival + '/Foto' + foto + '.jpg').default} style={{width: "100%"}} />
                        </div>
                        
                        )
                    })
                
                }
               


       
                
       
                
                
                <a className="prev_galery" onclick="plusSlides(-1)">&#10094;</a>
                <a className="next_galery" onclick="plusSlides(1)">&#10095;</a>
       
                
            </div>
        </div>
            
        
        
       </main>


    
   )

}

export default Galeria_Rival




 