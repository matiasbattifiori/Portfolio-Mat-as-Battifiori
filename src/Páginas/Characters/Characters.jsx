import { useEffect, useState, useContext} from "react"
import {chacatersContext} from "../../Context/index.jsx"
import Navegation from "../../Components/Navegation/Navegation.jsx"
import Tarjeta from "../../Components/Tarjeta/Tarjeta.jsx"
import Filter from "../../Components/Filter/Filter.jsx"
import "./Characters.css"

export default function Characters() {
    let [data,setData]=useState([])
    let [dataCompleta,setDataCompleta]=useState([])
    //let dataCompleta=useContext(chacatersContext)
    let [filtrosAplicados, setFiltrosAplicados]=useState([])
    let character=useContext (chacatersContext)
    let [show,setShow]=useState(true)

    let filterName=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

    const mostrarData=async()=>{

        let info= await fetch ("https://rickandmortyapi.com/api/character")
            .then((resp)=>{return resp.json()})
            .catch((error)=>console.log("error:" +error));
           
            setDataCompleta(info.results)
            setData(info.results)
    }
    

    
    const filtrar=(inputData)=> {
        let pulsado=inputData.checked;
        let filtroPulsado=inputData.value;

        console.log(pulsado)
        console.log(filtroPulsado)

        if(pulsado){
            
            setFiltrosAplicados([...filtrosAplicados,filtroPulsado])
            
            

        }else{
            setData(dataCompleta)
            let FiltrosActualizados=filtrosAplicados.filter((fil)=>{return fil !== filtroPulsado})
            setFiltrosAplicados(FiltrosActualizados)
        }
               
       
    }
    
    useEffect(()=>{
        filtrosAplicados.forEach((filtro)=>{
            let nuevaLista;
            
            switch (filtro) {
                case "Character Alive":
                nuevaLista=data.filter((personaje)=>{return personaje.status === "Alive"})
                    break;

                case "Character Dead":
                nuevaLista=data.filter((personaje)=>{return personaje.status === "Dead"})
                    break;
                
                case "Female":
                nuevaLista=data.filter(( personaje)=>{return personaje.gender === "Female"})
                    break;  
                  
                case "Male":
                nuevaLista=data.filter((personaje)=>{return personaje.gender === "Male"})
                    break;  
                   
                case "Origin Unknown":
                nuevaLista=data.filter((personaje)=>{return personaje.origin.name === "unknown"})
                    break; 
            }
            setData(nuevaLista)
            
        })

        

    },[filtrosAplicados])

    useEffect(()=>{
        mostrarData()
        setData(dataCompleta)
    },[])
    
   
    return(
        <div>
            <Navegation/>
            
            
            <h2 className="m-3 titulos-characters subtitulo">Filters</h2>
           
            {/*Acá va el menú hamburguesa*/}

            <div className="mobileFilters bg rounded-2 m-4 d-flex  align-items-center justify-content-between" onClick={()=>{setShow(!show)}}>
                <h2 className="m-3 titulos-characters d-flex ">Filters</h2>
                 {/*<i className="bi bi-list icono-hamburguesa"></i>*/}
                 <p className="m-3"><img src="libreria-digital.png" alt="libreria" /></p>
            </div>


            <form className={show? "form d-flex justify-content-between row p-4 ": " form d-none justify-content-between row p-4"}>
                {
                    filterName.map((filter)=>{
                        return <Filter key={filter} title={filter} filtar={filtrar}/>
                    })
                } 
            </form>

            

            <section className="section-cards d-flex aling-items-center m-0 row justify-content-center w-100 pt-5">
               {
               data.length == 0?<p className="alert bg-success Error-404"><i class="bi bi-exclamation-triangle-fill pe-2"></i>Sorry! There are no characters width all those properties.</p>:
               data.map((personaje)=>{
                    return <Tarjeta key={personaje.id} personaje={personaje}/>
                    })
                }                           
            </section>
        </div>
    )
}   