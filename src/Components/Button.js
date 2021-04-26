
function Button(props) {
    const {visibility, ...other} = props;
    if (visibility===undefined)
        console.log("WARNING: Button called without visibility attribute")
    if (visibility) {
        return (
            <button type="button" {...other}>
                {props.children}
            </button>
        );
    }
    else {
        return ''
    }
}

export default Button
