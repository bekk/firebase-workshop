import React from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const HomeHeader = styled.h1`
    text-align: center;
    font-size: 3em;
    margin-bottom: 1em;
`

const Home = () => {  
    const navigate = useNavigate();

    return (
        <Container>
            <HomeHeader>Quiz generator</HomeHeader>
            <button style={ {backgroundColor: '#54BAB9', padding: '2em', color: 'white'} } onClick={ () => navigate('/') }>Lag Quiz</button>
            <br/>
            <ButtonsContainer>
                <button  onClick={ () => navigate('question') }>Legg til nytt spørsmål</button>
                <button  onClick={ () => navigate('questions') }>Alle spørsmål</button>
            </ButtonsContainer>
        </Container>
    );
}

export default Home;