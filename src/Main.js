import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="wrapper">
            <header>
                <h1>Welkom bij RoDO</h1>
            </header>
            <main>
                <div className="explainer-text">Via deze website kan je opdrachten inzien en vragen invullen. Om verder te gaan kan je inloggen met je gekregen inlogcode.</div>
                <div>
                    <input type="text" placeholder="Logincode..." />
                    <Link to={"vragenlijst"}><button className="primary-btn" value="Login">Login</button></Link>


                </div>
            </main>

                    <Link to={"vragenlijst_aanmaken"}>Open Questionnaire</Link>
        </div>
    );
}

export default Main;