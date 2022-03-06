import React, { Component } from "react";

class QuizEnd extends Component {
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a href="">Reset Quiz</a>
      </div>
    );
  }
}

const isQuizEnd =  {quizData.quiz_questions.length == quiz_position - 1}  

export default QuizEnd;
