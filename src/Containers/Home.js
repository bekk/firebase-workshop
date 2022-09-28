import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logOut, createQuiz } from "../firebase";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);

  /*
    // Used to listen for changes to the logged-in user state.

    useEffect(() =>{
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, authUser => authUser ? setUser(authUser) : setUser(null));
        return () => unsubscribe();
    }, []);
    console.log(user)
    */

  const onCreateQuiz = () => {
    createQuiz();
    navigate("quiz");
  };

  return (
    <Container>
      <HomeHeader>Quiz generator</HomeHeader>
      <CreateQuizButton onClick={() => onCreateQuiz()}>
        Create quiz
      </CreateQuizButton>
      <ButtonsContainer>
        <button onClick={() => navigate("question")}>
          Add new question
        </button>
        <button
          style={{ marginLeft: "1em" }}
          onClick={() => navigate("questions")}
        >
         My questions
        </button>
      </ButtonsContainer>

      {!user && (
        <UserManagementContainer>
          <button onClick={() => navigate("/login")}>Log in</button>
          <button
            style={{ marginLeft: "1em" }}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </UserManagementContainer>
      )}
      {user && (
        <UserManagementContainer>
          <button onClick={() => logOut()}>Log out</button>
        </UserManagementContainer>
      )}
    </Container>
  );
};

const HomeHeader = styled.h1`
  text-align: center;
  font-size: 3em;
  margin-bottom: 1em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 1em;
  padding-left: 1em;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;

const CreateQuizButton = styled.button`
  background-color: #54bab9;
  padding: 4em;
  color: white;
`;

const UserManagementContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

export default Home;
