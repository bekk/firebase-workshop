import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


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
                <Button>
                    Registrer
                </Button>
                <Button
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