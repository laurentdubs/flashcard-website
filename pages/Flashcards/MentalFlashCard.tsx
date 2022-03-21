import React from "react";
import Layout from "../../components/Layout";
import ListOfQuestions from "../data/ListOfQuestions.json";


type MentalFlashCardProps= {
    question: string;
    answer: string;
}

const MentalFlashCard: React.FC<MentalFlashCardProps> = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = React.useState(false);

    
        {ListOfQuestions.map((data) => {
        const key = data.question;
        question = data.question;
        answer = data.answer;
        })}
    
        
      

    return (
        <>
        <Layout>
            <h1>MentalFlashCard</h1>
            
            <div
            
             className= 
                 "mental-flashcard" onClick= {() => setShowAnswer (!showAnswer)}
             >
            {showAnswer ? answer + "✅" : question}
            </div>
    </Layout>    
        </>
    
    )
};

export default MentalFlashCard;

