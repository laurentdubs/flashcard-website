import React from "react";
import Layout from "../../components/Layout";


type InputFlashCardProps= {
    question: string;
    answer: string;
}

const InputFlashCard: React.FC<InputFlashCardProps> = ({
    question,
    answer,
}) => {
    const [userAnswer, setUserAnswer] = React.useState("");
    const [showAnswer, setShowAnswer] = React.useState(false);

    
    question = "Sur quelle planète désertique Anakin Skywalker est-il arrivé à l'âge de quatre ans ?"
    answer = "Tatooine"
             

    return(
    <>
     <Layout>
        <div className= "flashcard">
            <h1>InputFlashCard</h1>
            {showAnswer ? (
                <div
                    className= {userAnswer === answer ? "bg-success" : "bg-error"}
                    onClick= {() => {
                    setShowAnswer(!showAnswer);
                    setUserAnswer("");
                    }}
                    >
                    <div>{userAnswer === answer ? "✅" : "❌"}</div>
                </div>
            ) : null}
            <div>{showAnswer ? "The answer is :" + answer : question}</div> 
                    <input type="text" 
                    onChange={(event) => {
                        setUserAnswer(event.target.value);
                    }}
                    value={userAnswer}
                    />
                    <button onClick={() => setShowAnswer(!showAnswer)}>Check</button>
        </div>
     </Layout>
     </>
    )
}

export default InputFlashCard;

