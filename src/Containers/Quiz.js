import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Quiz = () => {
  const navigate = useNavigate();

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
          <tbody></tbody>
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
