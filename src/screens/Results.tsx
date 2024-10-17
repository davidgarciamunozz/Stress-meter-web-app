// Define los tipos de las props
interface ResultsProps {
    responses: string[]; // Un array de strings que representa las respuestas
}


const Results: React.FC<ResultsProps> = ({ responses }) => {
    const optionScores  : Record<string, number> = {
        "Casi nunca": 1,
        "A veces": 2,
        "Con frecuencia": 3,
        "Todo el tiempo": 4,
        "Perro": 0,
        "Gato": 0,
        "Pájaro": 0,
        "Pez": 0,
        "Pizza": 0,
        "Sushi": 0,
        "Tacos": 0,
        "Ensalada": 0,
    };

    const totalScore = responses.reduce((total:number, response:string) => {
        return total + (optionScores[response] || 0); // Sumar puntajes
    }, 0);

    let stressLevel;
    if (totalScore <= 5) {
        stressLevel = "Bajo";
    } else if (totalScore <= 10) {
        stressLevel = "Moderado";
    } else {
        stressLevel = "Alto";
    }

    return (
        <div>
            <h1>Nivel de Estrés</h1>
            <p>Puntuación Total: {totalScore}</p>
            <p>Nivel de Estrés: {stressLevel}</p>
            {/* Puedes agregar más información o recomendaciones según el nivel de estrés */}
        </div>
    );
};

export default Results;
