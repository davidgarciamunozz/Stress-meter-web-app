// src/Test.tsx
import { db } from '../firebase'; // Importar la instancia de db
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import NavBar from "../components/Navigation/NavBar";
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function Test() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {
        // Validación para asegurarse de que el campo no esté vacío
        if (!email.trim()) {
            console.error("El campo de correo electrónico no puede estar vacío.");
            alert("Por favor, ingresa un correo electrónico."); // Mensaje al usuario
            return; // Salir de la función si el campo está vacío
        }
    
        try {
            const docRef = await addDoc(collection(db, "emails"), {
                email: email,
            });
            console.log("Email almacenado con ID: ", docRef.id);
            // Notificar al usuario que su email ha sido almacenado en la base de datos
            alert('Email almacenado con éxito');
            // Redirigir al usuario a la página del formulario
            navigate("/Stress-meter-web-app/form");
        } catch (e) {
            console.error("Error al agregar el email: ", e);
        }
    };
    

    return (
        <div>
        <NavBar/>
        <div style={styles.container}>
            <h1 style={styles.title}>Conoce tu nivel de estrés</h1>
            <p style={styles.description}>
                Tómate unos minutos para descubrir cómo el estrés está afectando tu bienestar. 
                Completa este sencillo test y recibe sugerencias personalizadas para mejorar tu bienestar.
            </p>
            <img 
                src="https://natureboost.cz/themes/leo_zlin/assets/img/modules/leoblog/1/c/young-beautiful-woman-lying-grass-reading-message-cell-phone-park.jpg" 
                alt="Persona relajada usando smartphone" 
                style={styles.image}
            />
            <input
                type="email"
                name="correo"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={handleEmailChange}
                required
                style={styles.input}
            />
            <button onClick={handleSubmit} style={styles.button}>
                Continuar
            </button>
        </div>
        <Footer/>
        </div>
    );
}
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '400px',
        margin: '0 auto',
        height: '80vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '5rem',
    },
    title: {
        color: '#0077be',
        fontSize: '24px',
        textAlign: 'center',
        marginBottom: '10px',
    },
    description: {
        color: '#555',
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '20px',
        lineHeight: '1.5',
    },
    image: {
        width: '100%',
        maxWidth: '300px',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '10px',
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '20px',
    },
    button: {
        backgroundColor: '#0077be',
        color: 'white',
        padding: '10px 20px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};