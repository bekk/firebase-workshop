import React from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {  
    const navigate = useNavigate();
   
    return (
        <Container>
            <HomeHeader>Quiz generator</HomeHeader>            
            <CreateQuizButton>
                Lag Quiz
            </CreateQuizButton>
            <ButtonsContainer>
                <button  onClick={ () => navigate('question') }>Legg til nytt spørsmål</button>
                <button style={ {marginLeft: '1em'} } onClick={ () => navigate('questions') }>Mine spørsmål</button>
            </ButtonsContainer>
            <UserManagementContainer>
                <button onClick={ () => navigate('/login') }>Log inn</button>
                <button style={ {marginLeft: '1em'} } onClick={ () => navigate('/register') }>Registrer</button>
            </UserManagementContainer>
        </Container>
    );
}

const HomeHeader = styled.h1`
    text-align: center;
    font-size: 3em;
    margin-bottom: 1em;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 1em;
    padding-left: 1em;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`

const CreateQuizButton = styled.button`
    background-color: #54BAB9;
    padding: 4em;
    color: white;
`

const UserManagementContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
`


export default Home;