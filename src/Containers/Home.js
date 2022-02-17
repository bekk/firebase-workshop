import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { auth, createQuiz, logout } from '../firebase';

// eslint-disable-next-line react/prop-types
const UserManagement = ({user, navigate}) => {
    if(user){
        return <div>
            <button onClick={ () => logout() }>Logg ut</button>
        </div>
    }
    return (<div style={ {display: 'flex', flexDirection: 'row', alignItems: 'center'} }>
        <button onClick={ () => navigate('/login') }>Log inn</button>
        <button style={ {marginLeft: '1em'} } onClick={ () => navigate('/register') }>Registrer</button>
    </div>)
}

const Home = () => {  
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [error, setError] = useState('');

    
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(authUser => authUser ? setUser(authUser) : setUser(null));
        return () => unsubscribe();
    }, []);
   

    return (
        <Container>
            <HomeHeader>Quiz generator</HomeHeader>            
            <CreateQuizButton onClick={ () =>  createQuiz()
                .then(quiz =>{
                    navigate('/quiz', { state: quiz } )
                })
                .catch(error => {
                    setError(error)
                })
            }
            >Lag Quiz
            </CreateQuizButton>
            { error && <h1 style={ {color: '#D885A3', marginTop: '1em'} }>{ error }</h1> }
            <ButtonsContainer>
                <button  onClick={ () => navigate('question') }>Legg til nytt spørsmål</button>
                <button style={ {marginLeft: '1em'} } onClick={ () => navigate('questions') }>Mine spørsmål</button>
            </ButtonsContainer>
            <UserManagementContainer>
                <UserManagement user={ user } navigate={ navigate }/>
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
    display: flex;
    position: absolute;
    bottom: 0;
    margin-bottom: 2em;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 3em;
`

export default Home;