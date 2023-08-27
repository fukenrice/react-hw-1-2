import './Button.css'

function Button(props) {
    const value = props.value
    const onBtnClick = () => {
        props.onBtnClick(value)
    }

    return <input type="button" value={value} className="btn" onClick={onBtnClick} />

}


export default Button
