import { Route, Routes } from "react-router-dom"
// importar paginas 
import Landing from "./screens/landing"
import About from "./screens/About"
import EcoCampus from "./screens/EcoCampus"
import Playlist from "./screens/Playlist"
import Test from "./screens/Test"
import Results from "./screens/Results"
import SurveyQuestion from "./screens/Form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function AppRoutes() {
    const [responses, setResponses] = useState<string[]>([]); // Almacena las respuestas
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const navigate = useNavigate();

      // Define tus preguntas y opciones
      const questions = [
        { question: "¿Con qué frecuencia te sientes abrumado por tus responsabilidades?", options: ["Casi nunca", "A veces", "Con frecuencia", "Todo el tiempo"] },
        { question: "¿Con qué frecuencia tienes dificultades para concentrarte en tus tareas?", options: ["Casi nunca", "A veces", "Con frecuencia", "Todo el tiempo"] },
        { question: "¿Con qué frecuencia sientes que no puedes cumplir con tus plazos?", options: ["Casi nunca", "A veces", "Con frecuencia", "Todo el tiempo"] },
        { question: "¿Con qué frecuencia experimentas cambios en tu apetito debido al estrés?", options: ["Casi nunca", "A veces", "Con frecuencia", "Todo el tiempo"] },
        { question: "¿Con qué frecuencia te sientes irritable o ansioso?", options: ["Casi nunca", "A veces", "Con frecuencia", "Todo el tiempo"] },
        { question: "¿Con qué frecuencia sientes que no tienes tiempo suficiente para ti mismo?", options: ["Casi nunca", "A veces", "Con frecuencia", "Todo el tiempo"] },
        { question: "¿Con qué frecuencia experimentas problemas para dormir?", options: ["Casi nunca", "A veces", "Con frecuencia", "Todo el tiempo"] },
        { question: "¿Con qué frecuencia sientes que tu rendimiento académico se ve afectado por el estrés?", options: ["Casi nunca", "A veces", "Con frecuencia", "Todo el tiempo"] },
        { question: "¿Con qué frecuencia buscas actividades para relajarte o desconectar?", options: ["Casi nunca", "A veces", "Con frecuencia", "Todo el tiempo"] },
        { question: "¿Con qué frecuencia hablas con alguien sobre tus preocupaciones o problemas?", options: ["Casi nunca", "A veces", "Con frecuencia", "Todo el tiempo"] },
    ];
    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleContinue = (selectedOption: string) => {
        console.log("Opción seleccionada:", selectedOption);
        // Aquí puedes guardar la opción seleccionada, si es necesario
        setResponses([...responses, selectedOption]);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigate("/results"); // Redirige a resultados si no hay más preguntas
        }
    };
    
    return (
        <Routes>
            <Route path="/Stress-meter-web-app/" element={<Landing />} />
            <Route path="/Stress-meter-web-app/about" element={<About />} />
            <Route path="/Stress-meter-web-app/ecocampus" element={<EcoCampus />} />
            <Route path="/Stress-meter-web-app/playlist" element={<Playlist />} />
            <Route path="/Stress-meter-web-app/test" element={<Test/>} />
            <Route path="/Stress-meter-web-app/results" element={<Results responses={responses} />} />
            <Route path="/Stress-meter-web-app/form" element={<SurveyQuestion
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={questions.length}
                    question={questions[currentQuestionIndex].question}
                    options={questions[currentQuestionIndex].options}
                    onBack={handleBack}
                    onContinue={handleContinue}
                />}
                />
        </Routes>
    )

}
export default AppRoutes