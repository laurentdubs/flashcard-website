import React from "react";
import Layout from "../../components/Layout";


type MultipleFlashCardProps= {
    question: string;
    answer: string;
    wrongAnswers: string[];
}

const MultipleFlashCard: React.FC<MultipleFlashCardProps> = ({
    question,
    answer,
    wrongAnswers
    }) => {
        const [userAnswer, setUserAnswer] = React.useState("");
        const [showAnswer, setShowAnswer] = React.useState(false);
        const defaultShuffleAnswers : string[] = [];
        const [shuffleAnswers, setShuffleAnswers] = React.useState(defaultShuffleAnswers);

    React.useEffect(() => {
        const answers = [answer, ...wrongAnswers].sort(() => Math.random() -0.5);
        setShuffleAnswers(answers);
        }, [answer, wrongAnswers]);

    question= "Quel nom Obi-Wan Kenobi a-t-il adopté pendant des années jusqu'au jour où il rencontra Luke ?"
    answer= "Ben"
    wrongAnswers= ["Sid", "Ken", "Tom"]

return (
    <Layout>
        <div className= "flashcard">
            <h1>MultipleFlashCard</h1>
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
            ) : (

            <div className="bg-neutral">
                <div>{question}</div>

                {shuffleAnswers.map((shuffleAnswer, index) => (
                    <div key= {shuffleAnswer}>
                        <input
                        type="radio"
                        name="answer"
                        id={"answer-" + index}
                        value={shuffleAnswer}
                        onChange={() => {
                            return setUserAnswer(shuffleAnswer);
                        }}
                        />
                        <label htmlFor={"answer-" + index}>{shuffleAnswer}</label>    
                    </div>
                ))}
                <button onClick={() => setShowAnswer(!showAnswer)}>Check</button>    
            </div>
            )} 
        </div>
    </Layout>
        
    );
 };

export default MultipleFlashCard;