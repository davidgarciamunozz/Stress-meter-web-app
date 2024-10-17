import NavBar from "../components/Navigation/NavBar"
import "./Playlist.css"
export default function Playlist (){
    return(
        <>
        <NavBar/>
            <div className="info">
        <h1 className="title">Tu playlist, tu momento</h1>
        <p>Elige la música que te inspire, relaje y se adapte a tu estado de ánimo. 
        Desde melodías suaves que invitan a la relajación, hasta ritmos energizantes que revitalizan tu día.</p>
        </div>
        <div className="info2">
        <h2 className="title">Meditación guiada</h2>
        <iframe  src="https://open.spotify.com/embed/episode/5rMQfNXMxRT36Mpq6XOQqm?utm_source=generator&t=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <h2 className="title">Sonidos de la naturaleza</h2>
        <iframe  src="https://open.spotify.com/embed/track/3fEv1aGc7IsFlDUUrxIsWL?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <h2 className="title">Música para concentrarse</h2>
        <iframe  src="https://open.spotify.com/embed/track/48yuZoWDoFu7ZdNejkFFus?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        
        </div>
        </>
    )
}