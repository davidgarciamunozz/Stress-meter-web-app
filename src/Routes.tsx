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
        { question: "¿Qué animal prefieres?", options: ["Perro", "Gato", "Pájaro", "Pez"] },
        { question: "¿Cuál es tu comida favorita?", options: ["Pizza", "Sushi", "Tacos", "Ensalada"] },
        // ... más preguntas
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
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/ecocampus" element={<EcoCampus />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/test" element={<Test/>} />
            <Route path="/results" element={<Results responses={responses} />} />
            <Route path="/form" element={<SurveyQuestion
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