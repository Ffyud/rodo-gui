import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Vragenlijst from "./Vragenlijst";
import React from "react";
import Questionnaire from "./Vragenlijst_aanmaken";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    <Route index element={<Main />} />
                    <Route path="vragenlijst" element={<Vragenlijst />} />
                </Route>
            </Routes>
            <Questionnaire />
        </div>
    );
}

export default App;
