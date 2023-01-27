import VragenlijstVraag from "./VragenlijstVraag";

function Vragenlijst() {
    return (
        <div className="wrapper">
            <header>
                <h1>🔥 Vragenlijst 🔥</h1>
            </header>
            <main>
                <VragenlijstVraag vraag="Wie ben jij?"></VragenlijstVraag>
                <VragenlijstVraag vraag="Hoeveel bier heb je op?"></VragenlijstVraag>
            </main>
        </div>
    );
}

export default Vragenlijst;