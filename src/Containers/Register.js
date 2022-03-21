import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { registerWithEmailAndPassword, signInWithGoogle } from "../firebase";


function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*
        Man kan her lage en useEffect for å lytte på endringer i innloggings-state dersom man ønsker å gjøre en handling før man f.eks navigererer tilbake.

        useEffect(() =>{
            const auth = getAuth()
            const unsubscribe = onAuthStateChanged(auth, authUser => authUser ? setUser(authUser) : setUser(null));
            return () => unsubscribe();
        }, []);
        console.log(user)
    */

    const onRegisterUserWithEmailAndPassword = () => {
        registerWithEmailAndPassword(name, email, password)
        navigate('/')
    }

    const onGoogleSignIn = () => {
        signInWithGoogle()
        navigate('/')
    }

    return (
        <RegisterWrapper>
            <RegisterContainer>
                <Input
                    type="text"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                    placeholder="Navn"
                />                
                <Input
                    type="text"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    placeholder="E-postadresse"
                />
                <Input
                    type="password"
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                    placeholder="Passord"
                />
                <Button onClick={() => onRegisterUserWithEmailAndPassword()}>
                    Registrer
                </Button>
                <Button onClick={() => onGoogleSignIn()}
                    style={ {backgroundColor: '#4285f4'} }
                >
                    Registrer med Google
                </Button>

                <div>
                    Har du konto? <Link to="/login">Logg inn her</Link>.
                </div>
            </RegisterContainer>
        </RegisterWrapper>
    );
}

const RegisterWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const RegisterContainer = styled.div`
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

export default Register;