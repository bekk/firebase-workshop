import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { auth, sendPasswordReset } from '../utils/firebase';

function Reset() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const [user, setUser] = useState();
    
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(authUser => authUser ? setUser(authUser) : setUser(null));
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) navigate('/dashboard');
    }, [user, navigate]);

    return (
        <ResetWrapper>
            <ResetContainer>
                <Input
                    type="text"
                    className="reset__textBox"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    placeholder="Din epost"
                />
                <Button className="reset__btn" onClick={ () => sendPasswordReset(email) }>
                    Send passord reset mail
                </Button>

                <div>
                    <Link to="/register">Registrer deg</Link>
                </div>
            </ResetContainer>
        </ResetWrapper>
    );
}


const ResetWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ResetContainer = styled.div`
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

export default Reset;