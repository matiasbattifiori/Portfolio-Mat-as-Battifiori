import {Link} from "react-router"
import "./ButtonHome.css"


export default function ButtonHome({contenido}){
    return(
        <div>
            <Link to={contenido} className="btn btn-primary p-3 botones-home">{contenido}</Link>
        </div>
    )
}