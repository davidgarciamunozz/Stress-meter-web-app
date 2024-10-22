import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navigation/NavBar";



interface ResultsProps {
    responses: string[];
  }
  
  const Results: React.FC<ResultsProps> = ({ responses }) => {

    useEffect(() => {    
        window.scrollTo(0, 0);
        console.log(totalScore);

    }   , );


    const optionScores: Record<string, number> = {
      "Casi nunca": 1,
      "A veces": 2,
      "Con frecuencia": 3,
      "Todo el tiempo": 4
    };
  
    const totalScore = responses.reduce((total: number, response: string) => {
      return total + (optionScores[response]);
    }, 0);
  
    let stressLevel;
    if (totalScore <= 10) {
      stressLevel = "Bajo";
    } else if (totalScore <= 20) {
      stressLevel = "Moderado";
    } else if (totalScore <= 30) {
      stressLevel = "Alto";
    } else {
      stressLevel = "Muy alto";
    }
  
    const getStressMessage = () => {
      switch(stressLevel) {
        case "Bajo":
          return "Es un buen momento para priorizar tu bienestar, tómate un momento para cuidar de ti. Explora nuestras actividades.";
        case "Moderado":
          return "Es un buen momento para priorizar tu bienestar, tómate un momento para cuidar de ti. Explora nuestras actividades.";
        case "Alto":
          return "Es importante que busques maneras de manejar el estrés, como practicar la meditación o hacer ejercicio.";
        case "Muy alto":
          return "Te recomendamos hablar con un profesional de la salud o un consejero.";
        default:
          return "";
      }
    };
  
    const containerStyle: React.CSSProperties = {
      fontFamily: 'Arial, sans-serif',
      height: '80vh',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f0f0f0',
    };
  
    const cardStyle: React.CSSProperties = {
      backgroundColor: 'white',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    };
  
    const iconStyle: React.CSSProperties = {
      fontSize: '48px',
      color: '#4A90E2',
      marginBottom: '10px',
    };
  
    const headingStyle: React.CSSProperties = {
      color: '#4A90E2',
      marginBottom: '10px',
    };
  
    const messageStyle: React.CSSProperties = {
      fontSize: '14px',
      color: '#333',
      lineHeight: '1.4',
    };
  
    const activityContainerStyle: React.CSSProperties = {
      backgroundColor: '#4A90E2',
      borderRadius: '10px',
      padding: '20px',
      color: 'white',
    };
  
    const activityStyle: React.CSSProperties = {
      marginBottom: '15px',
    };
  
    return (
        <>
        <NavBar/>
        <div style={containerStyle}>
        <div style={cardStyle}>
            <div style={iconStyle}>🧘</div>
            <h2 style={headingStyle}>Nivel de estrés {stressLevel} </h2>
            <p style={messageStyle}>{getStressMessage()}</p>
        </div>

        {/* Se eliminó el bloque de botones */}
        <h3 style={headingStyle}>Descubre las actividades para ti</h3>
        <div style={activityContainerStyle}>
            <div style={activityStyle}>
                <h4>Clase de cerámica</h4>
                <p>Lunes 9:30 a.m. a 11:30 a.m.</p>
                <p>Salón 203 I</p>
            </div>
            <div style={activityStyle}>
                <h4>Hablemos CineXcusa</h4>
                <p>Charla - Martes 5 de noviembre</p>
            </div>
            <div style={activityStyle}>
                <h4>Natación</h4>
                <p>Martes - viernes: 11:00 a.m. a 2:00 p.m.</p>
                <p>Martes y miércoles: 5:00 p.m. a 7:00 p.m.</p>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
  };
  
  export default Results;