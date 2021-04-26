
function Button(props) {
    const {visibility, ...other} = props;
    if (visibility) {
        return (
            <button type="button" {...other}>
                {props.title}
            </button>
        );
    }
    else {
        return ''
    }
}

export default Button
