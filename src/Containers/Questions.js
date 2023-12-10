import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getQuestions } from "../firebase";

const Questions = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions()
      .then((questionsSnapshots) => {
        if (!questionsSnapshots) {
          console.log("No questions available!");
          return;
        }

        setQuestions(questionsSnapshots.docs.map((q) => q.data()));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div style={{ width: "3em", marginLeft: "1em" }}>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
      <QuestionsContainer>
        <QuestionsHeader>Question</QuestionsHeader>
        <Table>
          <thead>
            <TableRow>
              <TableDataHead>Question</TableDataHead>
              <TableDataHead>Answer</TableDataHead>
            </TableRow>
          </thead>
          <tbody>
            {questions.map((question) => {
              return (
                <TableRow key={question.title}>
                  <TableData>{question.title}</TableData>
                  <TableData>{question.answer}</TableData>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </QuestionsContainer>
    </>
  );
};

const Table = styled.table`
  margin-top: 1em;
`;
const TableRow = styled.tr`
  &:hover {
    font-weight: bold;
  }
`;
const TableData = styled.td`
  padding: 5px;
  cursor: pointer;
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

export default Questions;
