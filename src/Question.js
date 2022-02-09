import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {createOrUpdateQuestion, deleteQuestion, getQuestion} from './firebase';

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;   
`


const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const FormField = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
`

const Question = () => {  
    const navigate = useNavigate();

    const [question, setQuestion] = useState({});
    const { id } = useParams()

    useEffect(() => {
        if(!id) return
        getQuestion(id)
            .then(querySnapshot => {
                const question = querySnapshot.data()
                setQuestion(question);
            })
    }, [id]);


    const onSubmit = (id) => {
        createOrUpdateQuestion(question, id).then(() => navigate('/'))
    }

    const onDelete = (id) => {
        deleteQuestion(id).then(() => navigate('/'))
    }

    return (
        <>
            <div style={ { width: '3em'} }>
                <button onClick={ () => navigate('/') }>Tilbake</button>
            </div>
            <QuestionContainer>
                <Form>
                    <FormField>
                        <label htmlFor="title">Spørsmål</label>
                        <input type="text" value={ question.title } name="question" id="question"  onChange={ e => setQuestion({ ...question, title: e.target.value }) }/>
                    </FormField>
                    <FormField>
                        <label htmlFor="answer">Svar</label>
                        <input type="text" value={ question.answer } name="answer" id="answer"  onChange={ e => setQuestion({ ...question, answer: e.target.value }) }/>
                    </FormField>
                </Form>
                <ButtonsContainer>
                    <button onClick={ () => onSubmit(id) }>Lagre</button>
                    <button onClick={ () => onDelete(id) }>Slett</button>
                </ButtonsContainer>
            </QuestionContainer>
        </>

    );
}

export default Question;
