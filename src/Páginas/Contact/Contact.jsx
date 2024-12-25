import Navegation from "../../Components/Navegation/Navegation.jsx"
import "./Contact.css"

export default function Contact() {
    return(
        <div>
            <Navegation/>
           <div className="d-flex justify-content-center">
                <div className="container-contact d-flex flex-column justify-content-center aling-items-center p-4">
                        <div className="d-flex justify-content-center">
                                <div className="">
                                        <h1 className="text-center titulo1">Contact</h1>
                                        <p className="text-center titulo2">Leave us your information so we can contact you</p>
                                </div>
                        </div>
                        
                        
                        <form className="container-form justify-content-md-center p-4">
                                    <div className="d-flex gap-2 justify-content-between">
                                            <div className="d-flex div-1 flex-column">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" id="name" className="rounded input-text p-2"/>
                                            </div>

                                    <div className="d-flex div-2 flex-column">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" className="rounded input-text p-2"/>
                                    </div>

                                    </div>
                                    

                                    <div className="d-flex div-3 flex-column">                        
                                        <label htmlFor="messege">Messege</label>
                                        <textarea id="messege" className="rounded messege p-4" cols="30" rows="10" required/>
                                    </div>

                                    <input type="submit" value={"Send"} className="div-4 btn btn-primary p-1 botones-home boton-submit"/>
                        </form>

                </div>

               
           </div>

           
        </div>
    )
}