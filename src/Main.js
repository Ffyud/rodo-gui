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
<<<<<<< HEAD
                    <Link to={"LogIn"}>Open LoginForm</Link>
                    <br/><br/>
                    <Link to={"vragenlijst"}>Open vragenlijst</Link>
                    <br/><br/>
                    <Link to={"vragenlijst_aanmaken"}>Open Questionnaire</Link>
=======
                    <input type="text" placeholder="Logincode..." />
                    <Link to={"vragenlijst"}><button className="primary-btn" value="Login">Login</button></Link>


>>>>>>> 17e0c95493c5bd416619091f107e65db9b4979e0
                </div>
            </main>

                    <Link to={"vragenlijst_aanmaken"}>Open Questionnaire</Link>
        </div>
    );
}

export default Main;