import React from "react";
import { useLoaderData } from "react-router-dom";
import Qdetails from "../Qdetails/Qdetails";
import './Quiz.css'

const Quiz = () => {
  const quizes = useLoaderData();
  const { name, questions } = quizes.data;
  console.log(questions);
  return (

    <div className="quiz">
      <h3 className="text-center text-primary fw-bold fs-1">The {name} Quiz</h3>

      <div className="details">
        {questions.map((quiz) => (
          <Qdetails key={quiz.id} quiz={quiz}></Qdetails>
        ))}
      </div>
    </div>

  );
};

export default Quiz;



