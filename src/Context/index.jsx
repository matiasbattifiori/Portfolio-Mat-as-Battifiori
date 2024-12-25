import { createContext,useEffect,useState } from "react";

export const chacatersContext= createContext([]);

export default function CharactersProvider({children}) {
    let [character,setCharacters]=useState([]);
    
    const mostrarData=async()=>{

        let info= await fetch ("https://rickandmortyapi.com/api/character")
            .then((resp)=>{return resp.json()})
            
            .catch((error)=>console.log("error:" +error));
           
                   
            setCharacters(info.results)
    }
   useEffect(()=>{
    mostrarData();
   },[])
    

    return (
        <chacatersContext.Provider value={character}>
            {children}
        </chacatersContext.Provider>
    )

}