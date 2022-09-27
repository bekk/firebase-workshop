import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { createQuestion, deleteQuestion, getQuestion, updateQuestion } from '../firebase'


const Question = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [question, setQuestion] = useState({});

    const onSaveButtonClick = () => {
        if(id) {
            updateQuestion(question, id)
            navigate('/')
            return
        }
        createQuestion(question)
        navigate('/')
    }

    const onDeleteButtonClick = () => {
        deleteQuestion(id)
        navigate('/')
    }

    useEffect(() => {
        if(id) {
            getQuestion(id)
                .then((questionSnapshot) =>
                    setQuestion(questionSnapshot.data())
                )
                .catch((e) => console.log(e));
        }
      }, [id]);

    return (
        <>
            <div style={ { width: '3em', marginLeft: '1em'} }>
                <button onClick={ () => navigate('/') }>Tilbake</button>
            </div>
            <QuestionContainer>
                <QuestionHeader>{ id ? 'Update Question' : 'Create a new Question' }</QuestionHeader>
                <Form>
                    <FormField>
                        <label style={ {marginBottom: '0.5em'} } htmlFor="title">Question</label>
                        <textarea rows="2" cols="50" type="text" value={question.title} name="question" id="question"  onChange={ e => setQuestion({ ...question, title: e.target.value }) } />
                    </FormField>
                    <FormField>
                        <label style={ {marginBottom: '0.5em'} } htmlFor="answer">Answer</label>
                        <textarea rows="1" cols="50" type="text" value={question.answer} name="answer" id="answer"  onChange={ e => setQuestion({ ...question, answer: e.target.value }) }/>
                    </FormField>
                </Form>
                <ButtonsContainer>
                    <SaveButton onClick={() => onSaveButtonClick() }>Save</SaveButton>
                    <DeleteButton onClick={() => onDeleteButtonClick() }>Delete</DeleteButton>
                </ButtonsContainer>
            </QuestionContainer>
        </>

    );
}

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 1em;
    margin-top: 2em;
`

const QuestionHeader = styled.h1`
    font-size: 2em;
    margin-bottom: 0.5em;
    margin-top: 0.2em;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3em;
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

const DeleteButton = styled.button`
    background-color: #D885A3;
    color: white;
`

const SaveButton = styled.button`
    background-color: #54BAB9;
    margin-right: 1em;
`


export default Question;
