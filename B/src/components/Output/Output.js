import './Output.css'

function Output(props) {

    const clear = () => {
        props.onClearClick('C')
        console.log("clear clicked");
    }

    return <output>
        <div className="clear" onClick={clear}>
            clear
            </div>
            <div className="result">{props.result}</div>
        </output>
}

export default Output