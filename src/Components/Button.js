
function Button(props) {
    if (props.visibility) {
        return (
            <button type="button" className={props.className} onClick={props.onClick}>
                {props.title}
            </button>
        );
    }
    else {
        return ''
    }
}

export default Button