import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [user, setUser] = useState();
    
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(authUser => authUser ? setUser(authUser) : setUser(null));
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) navigate('/');
    }, [user, navigate]);

    return (
        <LoginWrapper>
            <LoginContainer>
                <Input
                    type="text"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    placeholder="Epost"
                />           
                <Input
                    type="password"
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    placeholder="Passord"
                />
                <Button
                    onClick={ () => logInWithEmailAndPassword(email, password) }
                >
                    Log inn
                </Button>
                <Button style={ {  backgroundColor: '#4285f4'} } onClick={ signInWithGoogle }>
                    Log inn med Google
                </Button>
                <div>
                    <Link to="/reset">Glemt passord?</Link>
                </div>
                <br/>
                <div>
                    <Link to="/register">Register deg</Link>
                </div>
            </LoginContainer>
        </LoginWrapper>
    );
}

const LoginWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #dcdcdc;
    padding: 30px;
`
const Input = styled.input`
   padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;
    border: none;
    color: white;
    background-color: black;
`

export default Login;