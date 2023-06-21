import { Link } from "react-router-dom";
import React from "react";

function Main() {
    return (
        <div className="wrapper">
            <header>
                <h1>Welkom bij RoDO</h1>
            </header>
            <main>
                <div className="explainer-text">Via deze website kan je opdrachten inzien en vragen invullen. Om verder te gaan kan je inloggen met je gekregen inlogcode.</div>
                <div>
                    <Link to={"LogIn"}><button className="primary-btn">Open LoginForm</button></Link>
                    <br/><br/>
                    <Link to={"vragenlijst"}>Open vragenlijst</Link>
                    <br/><br/>
                    <Link to={"vragenlijst_aanmaken"}>Open Questionnaire</Link>
                    <br/><br/>
                    <Link to={"Deelnemer_VraagFrameWork"}>Open Quiz</Link>
                    <br/><br/>
                    <Link to={"testMultiChoice"}>Open MultipleChoice</Link>
                </div>
            </main>
            <Link to={"vragenlijst_aanmaken"}>Open Questionnaire</Link>
        </div>
    );
}

export default Main;