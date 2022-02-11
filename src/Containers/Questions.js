import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCurrentUserId, streamQuestions } from '../utils/firebase';


const QuestionRow = ({question, onClick} ) => {
    return ( <TableRow onClick={ onClick }>
        <TableData>{ question.title }</TableData>
        <TableData>{ question.answer }</TableData>
    </TableRow>)
}


const Questions = () => {  
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const unsubscribe = streamQuestions(
            (querySnapshot) => {
                if(!querySnapshot) {
                    console.log('Fant ingen spørsmål')
                }
                const questionItems = querySnapshot.docs.map(docSnapshot => {
                    return {
                        id: docSnapshot.id,
                        ...docSnapshot.data()
                    }

                });
                setQuestions(questionItems);
            },
            (error) => console.log(error), 
            getCurrentUserId()
        );
        return unsubscribe;
    }, [setQuestions]);


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
                        { questions.map((question, index) => {
                            return <QuestionRow question={ question } key={ index } onClick={ () => navigate(`/question/${question.id}`) }/>
                        }) }
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
const TableDataHead = styled.td`
    padding: 5px;
    font-weight: bold;
`
const TableData = styled.td`
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
    font-size: 2em;
    margin-bottom: 1em;
`


export default Questions;