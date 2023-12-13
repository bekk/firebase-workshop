import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createQuiz } from "../firebase";

const Quiz = () => {
  const navigate = useNavigate();

  const [quiz, setQuiz] = React.useState([]);

  React.useEffect(() => {
    createQuiz().then((questions) => {
      if (!questions?.length) {
        console.warn(
          "A quiz without questions is no fun! Have you forgotten to implement createQuiz?",
        );
      } else {
        setQuiz(questions);
      }
    });
  }, []);

  return (
    <>
      <div style={{ width: "3em", marginLeft: "1em" }}>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
      <QuestionsContainer>
        <QuestionsHeader>Quiz</QuestionsHeader>
        <Table>
          <thead>
            <tr>
              <TableDataHead>Question</TableDataHead>
              <TableDataHead>Answer</TableDataHead>
              <TableDataHead>Made by</TableDataHead>
            </tr>
          </thead>
          <tbody>
            {quiz.map((question) => (
              <tr key={question.title}>
                <td>{question.title}</td>
                <td>{question.answer}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </QuestionsContainer>
    </>
  );
};

const Table = styled.table`
  margin-top: 1em;
`;
const TableDataHead = styled.td`
  padding: 5px;
  font-weight: bold;
`;
const QuestionsContainer = styled.div`
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const QuestionsHeader = styled.h1`
  font-size: 2em;
  margin-bottom: 1em;
`;

export default Quiz;
