import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="wrapper">
            <header>
                <h1>🔥 Main 🔥</h1>
            </header>
            <main>
                <div>Dit is de landingspagina.
                    <br/><br/> Kijk, een route: <br/><br/></div>
                <div>
                    <Link to={"vragenlijst"}>Open vragenlijst</Link>
                </div>
            </main>
        </div>
    );
}

export default Main;