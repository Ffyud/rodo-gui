function VragenlijstVraag(props) {

    return (
        <div className="vraag-wrapper">
            <span className="vraag-text">{props.vraag}</span>
            <input type="text" placeholder="Tik je antwoord..."></input>
        </div>
    );
}

export default VragenlijstVraag;