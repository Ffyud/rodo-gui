import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Vragenlijst from "./Vragenlijst";
import Quiz from "./Deelnemer_VraagFrameWork";
import React from "react";
import Questionnaire from "./Vragenlijst_aanmaken";
import LoginForm from "./LogIn";
import MultiQuestion from "./testMultiChoice";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    <Route index element={<Main />} />
                    <Route path="vragenlijst" element={<Vragenlijst />} />
                    <Route path="vragenlijst_aanmaken" element={<Questionnaire />} />
                    <Route path="login" element={<LoginForm />} />
                    <Route path="Deelnemer_VraagFrameWork" element={<Quiz />} />
                    <Route path="testMultiChoice" element={<div className="question-container"><MultiQuestion /></div>} />
                </Route>
            </Routes>

        </div>
    );
}

export default App;
