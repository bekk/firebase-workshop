import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { streamQuestions } from './firebase';


const Table = styled.table`
    border: 1px solid black;
    margin-top: 1em;
`

const TableHeader = styled.thead`
    border: 1px solid black;
`

const TableBody = styled.tbody`
    border: 1px solid black;
`

const TableRow = styled.tr`
    border: 1px solid black;
`
const TableDataHead = styled.td`
    border: 1px solid black;
    padding: 5px;
    font-weight: bold;
`

const TableData = styled.td`
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
`
const QuestionsContainer = styled.div`
    margin: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const QuestionsHeader = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
`

const QuestionRow = ({question, key, onClick} ) => {
    return ( <TableRow key={ key } onClick={ onClick }>
        <TableData>{ question.title }</TableData>
        <TableData>{ question.answer }</TableData>
    </TableRow>)
}

QuestionRow.propTypes = {
    question: Object,
    key: Number,
    onClick: Function,
};

const Questions = () => {  
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const unsubscribe = streamQuestions(
            (querySnapshot) => {
                const updatedGroceryItems = querySnapshot.docs.map(docSnapshot => {
                    return {
                        id: docSnapshot.id,
                        ...docSnapshot.data()
                    }

                });
                setQuestions(updatedGroceryItems);
            },
        );
        return unsubscribe;
    }, [setQuestions]);

    return (
        <>
            <div style={ { width: '3em'} }>
                <button onClick={ () => navigate('/') }>Tilbake</button>
            </div>
            <QuestionsContainer>
                <QuestionsHeader>Alle Spørsmål</QuestionsHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableDataHead>Spørsmål</TableDataHead>
                            <TableDataHead>Svar</TableDataHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { questions.map((question, key) => {
                            return <QuestionRow question={ question } key={ key } onClick={ () => navigate(`/question/${question.id}`) }/>
                        }) }
                    </TableBody>
                </Table>              
            </QuestionsContainer>
        </>
    );
}

export default Questions;