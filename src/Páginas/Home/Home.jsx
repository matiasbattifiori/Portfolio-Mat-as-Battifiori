import "./Home.css"
import ButtonHome from "../../Components/ButtonHome/ButtonHome"

export default function Home() {
    return(        
        <div className="d-flex justify-content-center p-5" >

            <div className="container fondo-blanco p-5">
                <h1 className="titulo row text-center">Proyect Rick & Morty</h1>
                <h2 className="row text-center">Welcome to Rick & Morty Proyect!</h2>
                <p className="row text-center">This proyect was made for practising React and to make a functional Website</p>
                <p className="row text-center">In this Website you can know information of the characters of this animated series</p>
                <p className="row text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send a messege for any concern or suggestion</p>
                <h2 className="row text-center">Let's Go!</h2>
                
                <div className="d-flex justify-content-center gap-4 p-3 align-items-center">
                    <ButtonHome contenido="Characters" />
                    <ButtonHome contenido="Contact"/>
                </div>
            </div>
        </div>
    )
}

