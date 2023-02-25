import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="wrapper">
            <header>
                <h1>Welkom bij RoDO</h1>
            </header>
            <main>
                <div className="explainer-text">Log in als speler of als team</div>
                <div>
                    <input type="text" placeholder="Logincode van het team..." />
                    <input type="text" placeholder="Logincode van jou als speler..." />

                    <Link to={"vragenlijst"}>voorbeeld vragenlijst</Link>
                    <br/><br/>
                    <Link to={"vragenlijst_aanmaken"}>Open Questionnaire</Link>
                </div>
            </main>
        </div>
    );
}

export default Main;