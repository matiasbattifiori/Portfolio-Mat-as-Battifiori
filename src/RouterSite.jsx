import {BrowserRouter as Router, Routes, Route} from "react-router"
import Home from "./Páginas/Home/Home"
import Characters from "./Páginas/Characters/Characters"
import Contact from "./Páginas/Contact/Contact"
import CharactersProvider from "./Context/index"


export default function RouterSite() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Characters" element={<CharactersProvider><Characters/></CharactersProvider>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </Router>
        
    )
}