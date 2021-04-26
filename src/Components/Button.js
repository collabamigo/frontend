
function Button(props) {
    const {visibility, ...other} = props;
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
