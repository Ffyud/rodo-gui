import VragenlijstVraag from "./VragenlijstVraag";

function Vragenlijst() {
    return (
        <div className="wrapper">
            <header>
                <h1>Rodo vragen</h1>
            </header>
            <main>
                <div className="explainer-text">Vul onderstaande vragen in.</div>
                <VragenlijstVraag vraag="Wie ben jij?"></VragenlijstVraag>
                <VragenlijstVraag vraag="Hoeveel bier heb je op?"></VragenlijstVraag>
                <VragenlijstVraag vraag="Gaat neet?"></VragenlijstVraag>
            </main>
        </div>
    );
}

export default Vragenlijst;