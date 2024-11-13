import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navigation/NavBar";

interface ResultsProps {
    responses: string[];
}

// Definición de los niveles de estrés como tipo de unión de cadenas
type StressLevel = "Bajo" | "Moderado" | "Alto" | "Muy alto";

// Definir el objeto `stressActivities` con `as const`
const stressActivities: Record<StressLevel, { name: string; time: string; location: string }[]> = {
    "Bajo": [
        { name: "Yoga", time: "Martes 12:00 m. - 2:00 p.m", location: "Caballeriza" },
        { name: "Arte fantástico", time: "Lunes 12:00 m. - 3:00 p.m.", location: "Salón 203 I" }
    ],
    "Moderado": [
        { name: "Baile (Iniciantes)", time: "Martes 12:00 m. - 2:00 p.m.", location: "Salón 103 I" },
        { name: "Percusión", time: "Martes 2:00 p.m. - 4:00 p.m.", location: "Salón 204 I" }
    ],
    "Alto": [
        { name: "Danza urbana (Intermedios)", time: "Jueves 2:00 p.m. - 5:00 p.m", location: "Coliseo 2" },
        { name: "Técnica vocal", time: "Martes  2:00 p.m. - 5:00 p.m.", location: "Salón 103 I" }
    ],
    "Muy alto": [
        { name: "Crossfit", time: "Lunes, miércoles, viernes 11:00 a.m. - 2:00 p.m.", location: "Coliseo 2" },
        { name: "Entrenamiento funcional", time: "Lunes a viernes 11:00 a.m. - 1:00 p.m.", location: "Coliseo 1" }
    ]
};

const Results: React.FC<ResultsProps> = ({ responses }) => {

    const optionScores: Record<string, number> = {
        "Casi nunca": 1,
        "A veces": 2,
        "Con frecuencia": 3,
        "Todo el tiempo": 4
    };

    const totalScore = responses.reduce((total: number, response: string) => {
        return total + (optionScores[response] || 0);
    }, 0);

    // Asegurar que `stressLevel` sea de tipo `StressLevel`
    let stressLevel: StressLevel;
    if (totalScore <= 10) {
        stressLevel = "Bajo";
    } else if (totalScore <= 20) {
        stressLevel = "Moderado";
    } else if (totalScore <= 30) {
        stressLevel = "Alto";
    } else {
        stressLevel = "Muy alto";
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(totalScore);
    }, []);

    const getStressMessage = () => {
        switch (stressLevel) {
            case "Bajo":
                return "Es importante que busques maneras de manejar el estrés, como practicar la meditación o hacer ejercicio de bajo impacto. Incorporar breves momentos de calma durante tu día puede ayudarte a mantener el equilibrio y evitar que el estrés aumente";
            case "Moderado":
                return "Es importante que busques maneras de manejar el estrés, como practicar la meditación o hacer ejercicio moderado. Realizar actividades que disfrutes o técnicas de relajación te ayudará a reducir la tensión y recuperar tu energía.";
            case "Alto":
                return "Es importante que busques maneras de manejar el estrés, como practicar la meditación, hacer ejercicio intenso o consultar a un profesional si lo necesitas. Tomar tiempo para cuidar de ti mismo es fundamental para reducir el impacto del estrés en tu salud.";
            case "Muy alto":
                return "Tu nivel de estrés es muy alto y podría estar afectando tu bienestar seriamente. Es crucial que busques maneras efectivas de manejarlo, como técnicas de relajación profunda, ejercicio intenso o incluso apoyo de un profesional. Priorizar tu salud mental y física en este momento es esencial para recuperar el equilibrio y mejorar tu calidad de vida";
            default:
                return "";
        }
    };

    // Selecciona las actividades basadas en el nivel de estrés
    const activities = stressActivities[stressLevel];

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
            <NavBar />
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <div style={iconStyle}>🧘</div>
                    <h2 style={headingStyle}>Nivel de estrés {stressLevel} </h2>
                    <p style={messageStyle}>{getStressMessage()}</p>
                </div>

                <h3 style={headingStyle}>Descubre las actividades para ti</h3>
                <div style={activityContainerStyle}>
                    {activities.map((activity, index) => (
                        <div key={index} style={activityStyle}>
                            <h4>{activity.name}</h4>
                            <p>{activity.time}</p>
                            <p>{activity.location}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Results;
