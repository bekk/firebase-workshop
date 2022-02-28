import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Questions = () => {  
    const navigate = useNavigate();
    
    const QuestionRow = ({question} ) => {
        return ( 
        <TableRow>
            <TableData>{ question.title }</TableData>
            <TableData>{ question.answer }</TableData>
        </TableRow>)
    }

    return (
        <>
            <div style={ { width: '3em', marginLeft: '1em'} }>
                <button onClick={ () => navigate('/') }>Tilbake</button>
            </div>
            <QuestionsContainer>
                <QuestionsHeader>Spørsmål</QuestionsHeader>
                <Table>
                    <thead>
                        <TableRow>
                            <TableDataHead>Spørsmål</TableDataHead>
                            <TableDataHead>Svar</TableDataHead>
                        </TableRow>
                    </thead>
                    <tbody>
                        {/* Here you can insert your QuestionRow */}
                    </tbody>
                </Table>      
            </QuestionsContainer>
        </>
    );
}

const Table = styled.table`
    margin-top: 1em;
`
const TableRow = styled.tr`
    &:hover {
      font-weight: bold;
    }  
`
const TableData = styled.td`
    padding: 5px;
    cursor: pointer;

`
const TableDataHead = styled.td`
    padding: 5px;
    font-weight: bold;
`
const QuestionsContainer = styled.div`
    margin: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const QuestionsHeader = styled.h1`
    font-size: 2em;
    margin-bottom: 1em;
`


export default Questions;