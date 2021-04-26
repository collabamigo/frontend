
function Button(props) {
    const {visibility, title, ...other} = props;
    if (visibility) {
        return (
            <button type="button" {...other}>
                {title}
            </button>
        );
    }
    else {
        return ''
    }
}

export default Button
