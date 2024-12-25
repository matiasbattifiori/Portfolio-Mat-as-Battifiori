import "./Filter.css"

export default function Filter({title,filtar}){
    return(
        <div className="d-flex justify-content-start gap-3 bg-filtros rounded form-check form-switch bg-success col-2">
            <div className="posición-filtros p-2">
                <input className="form-check-input" id={title} type="checkbox" onClick={(event)=>filtar(event.target)} value={title}/>
                <label className="form-check-label" htmlFor={title}>{title}</label>
            </div>
            
        </div>
    )
} 