import "./Navegation.css"
import { Link } from "react-router"

export default function Navegation() {
    return(
        <nav className="d-flex justify-content-between">
            
            <Link to="/"><img src="../src/Images/Rick-and-Morty.png" alt="Rick & Morty Logo" className="img-logo"/></Link>
            
            <div className="d-flex align-items-center">
                <ul className="d-flex">
                    <li><Link to="/Characters" className="text-decoration-none rounded link-nav">Characters</Link></li>
                    <li><Link to="/Contact" className="text-decoration-none rounded link-nav">Contact</Link></li>
                </ul>  
            </div>
                    
        </nav>
    )
}