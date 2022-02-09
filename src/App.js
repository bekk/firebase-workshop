import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Question from './Question';
import Questions from './Questions';
import './firebase';

const Container = styled.main`
  display: grid;
`;

const App = () => {
    return (
        <Container>    
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route path="/question" element={ <Question /> } />
                <Route path="/question/:id" element={ <Question /> } />
                <Route path="/questions" element={ <Questions /> } />
            </Routes>
        </Container>
    );
}

export default App;
