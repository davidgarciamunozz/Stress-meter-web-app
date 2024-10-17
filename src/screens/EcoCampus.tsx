import NavBar from "../components/Navigation/NavBar"
import "./EcoCampus.css"

export default function EcoCampus (){
    return(
        <>  
            <NavBar/>
            <div className="info">
            <h1 className="title">EcoCampus</h1>
            <p>Es un proyecto liderado por la Universidad Icesi, que une sostenibilidad, conciencia ambiental y bienestar integral. 
            Nuestro objetivo es proporcionar espacios que favorezcan la relajación y el bienestar físico y mental de la comunidad, mientras se cuida la preservación de las áreas verdes y se promueve el uso responsable de los recursos disponibles en el campus.</p>
            <img className="img" src="https://i.pinimg.com/564x/a2/39/ec/a239ec19d424a8fc45b5b8217cef8354.jpg"></img>
            </div>

        </>
        

    )
}