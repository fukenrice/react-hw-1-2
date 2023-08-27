import Button from "../Button/Button"

function Keyboard(props) {


    return <div>
        {props.btnVals.map(btnVal => 
            <Button value={btnVal} onBtnClick={props.onBtnClick} />
            )}
    </div>
}

export default Keyboard