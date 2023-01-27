function VragenlijstVraag(props) {

    return (
        <div className="vragenlijstVraag">
            <span className="vraag">{props.vraag}</span>
            <input type="text" placeholder="Tik je antwoord..."></input>
        </div>
    );
}

export default VragenlijstVraag;