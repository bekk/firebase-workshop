import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {createOrUpdateQuestion, deleteQuestion, getQuestion} from './firebase';

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 1em;
    margin-top: 2em;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1em;   
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    justify-content: center;
    align-items: center;
`

const FormField = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    width: 100%;
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
            <div style={ { width: '3em', marginLeft: '1em'} }>
                <button onClick={ () => navigate('/') }>Tilbake</button>
            </div>
            <QuestionContainer>
                <Form>
                    <FormField>
                        <label htmlFor="title">Spørsmål</label>
                        <textarea rows="2" cols="50" type="text" value={ question.title } name="question" id="question"  onChange={ e => setQuestion({ ...question, title: e.target.value }) }/>
                    </FormField>
                    <FormField>
                        <label htmlFor="answer">Svar</label>
                        <textarea rows="1" cols="50" type="text" value={ question.answer } name="answer" id="answer"  onChange={ e => setQuestion({ ...question, answer: e.target.value }) }/>
                    </FormField>
                </Form>
                <ButtonsContainer>
                    <button style={ { backgroundColor: '#54BAB9', marginRight: '1em' } } onClick={ () => onSubmit(id) }>Lagre</button>
                    <button style={ {backgroundColor: '#D885A3', color: 'white'} }onClick={ () => onDelete(id) }>Slett</button>
                </ButtonsContainer>
            </QuestionContainer>
        </>

    );
}

export default Question;
