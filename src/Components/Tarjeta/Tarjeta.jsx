import "./Tarjeta.css"
import { useState } from "react"

export default function Tarjeta({personaje}) {
   let [ocultar,setOcultar]=useState(true)

    return(
        //Base Tarjetas
        <div className="tarjeta card container-card d-flex flex-row justify-content-between col-xs-12 col-md-6 col-sm-12">
            <div>
                <img src= {personaje.image} className="imagen-tarjeta "/>
                <h2 className="titulos-characters t-title card-title text-center text-wrap p-2 limitarTamaño" >{personaje.name}</h2>
                    <div className="d-flex justify-content-end">
                        <button onClick={()=>setOcultar(false)} className={ocultar?"btn btn-tarjeta": "d-none"}>Know More...</button>                    
                    </div>
            </div>
            {ocultar ?"":
            <div className="px-5 py-3">
                <button onClick={()=>setOcultar(true)}>X</button>
                <ul>
                    <li>
                        <h4>Character Status</h4> 
                        <p>{personaje.status}</p>
                    </li>

                    <li>
                        <h4>Species</h4>
                        <p>{personaje.species}</p>
                    </li>

                    <li>
                        <h4>Origin</h4>
                        <p>{personaje.origin}</p>
                    </li>

                    <li>
                        <h4>Gender</h4>
                        <p>{personaje.gender}</p>
                    </li>
                </ul>
                </div>}
                   
        </div>
    )
}