import React, { useState } from 'react';
import NavBar from '../components/Navigation/NavBar';

interface SurveyQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: string[];
  onBack: () => void;
  onContinue: (selectedOption: string) => void;
}

export default function SurveyQuestion({
  questionNumber,
  totalQuestions,
  question,
  options,
  onBack,
  onContinue
}: SurveyQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      onContinue(selectedOption);
      // Limpiar la opción seleccionada después de continuar
      setSelectedOption(null);
    }
  };

  return (
    <>
     <NavBar />
    <div style={styles.container}>
      <div style={styles.content}>
        <p style={styles.questionNumber}>
          Pregunta {questionNumber} de {totalQuestions}
        </p>
        <h2 style={styles.question}>{question}</h2>
        <form>
        {options.map((option, index) => (
          <div key={index}  style={styles.optionContainer}>
            <input
              style={styles.radio}
              type="radio"
              id={`option-${index}`}
              name="surveyOption"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
        </form>
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={onBack} style={styles.backButton}>
          Atrás
        </button>
        <button
          onClick={handleContinue}
          style={styles.continueButton}
          disabled={!selectedOption}
        >
          Continuar
        </button>
      </div>
    </div>
    </>
   
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#4a90e2',
    padding: '10px',
    marginBottom: '20px',
  },
  title: {
    color: 'white',
    margin: 0,
    fontSize: '24px',
  },
  content: {
    flex: 1,
  },
  questionNumber: {
    color: '#4a90e2',
    fontSize: '16px',
    marginBottom: '10px',
  },
  question: {
    color: '#2c3e50',
    fontSize: '20px',
    marginBottom: '20px',
  },
  optionContainer: {
    marginBottom: '15px',
    backgroundColor: 'white',
    padding: '15px 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  radio: {
    marginRight: '10px',
  },
  label: {
    color: '#34495e',
    fontSize: '16px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  backButton: {
    backgroundColor: '#bdc3c7',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  continueButton: {
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};