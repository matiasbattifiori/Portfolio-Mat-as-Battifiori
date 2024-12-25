const mostrarData=async()=>{
    await fetch ("https://rickandmortyapi.com/api/character")
        .then((resp)=>{return resp.json()})
        .then((data)=>{info=data;})
        .catch((error)=>console.log("error:" +error));

        console.log (info)
        mostrarInfo(info.results)
}