import VragenlijstVraag from "./VragenlijstVraag";
import getQuestionList from "./services/questionlist";
import { Link } from "react-router-dom";
import React from "react";

function Vragenlijst(props) {

    let vragenlijstId = props.vragenlijstId

    let vragenlijst = getQuestionList

    return (
        <div className="wrapper">
            <header>
                <h1>{vragenlijst['name']}</h1>
            </header>
            <main>
                <div className="explainer-text">Vul onderstaande vragen in.</div>
                <VragenlijstVraag vraag="Wie ben jij?"></VragenlijstVraag>
                <VragenlijstVraag vraag="Wie is de mol?"></VragenlijstVraag>
                <VragenlijstVraag vraag="Hoeveel bier heb je op?"></VragenlijstVraag>
                <VragenlijstVraag vraag="Hoeveel derpie derp heb je verzameld?"></VragenlijstVraag>
                <Link to={"/"}><button className="primary-btn">Opslaan en verder</button></Link>

            </main>
        </div>
    );
}

export default Vragenlijst;