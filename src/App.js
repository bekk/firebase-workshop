import React from "react";
import { Route, Routes } from "react-router-dom";
import "./firebase";

import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Question from "./Containers/Question";
import Questions from "./Containers/Questions";
import Quiz from "./Containers/Quiz";
import Register from "./Containers/Register";
import Reset from "./Containers/Reset";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/question" element={<Question />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
};
export default App;
