import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Vragenlijst from "./Vragenlijst";
import React from "react";
import Questionnaire from "./Vragenlijst_aanmaken";
import LoginForm from "./LogIn";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    <Route index element={<Main />} />
                    <Route path="/vragenlijst" element={<Vragenlijst vragenlijstId="1" />} />
                    <Route path="/vragenlijst_aanmaken" element={<Questionnaire />} />
                    <Route path="/login" element={<LoginForm />} />
                </Route>
            </Routes>

        </div>
    );
}

export default App;
