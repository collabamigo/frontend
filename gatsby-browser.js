const React = require("react")

exports.wrapRootElement = ({element, props}) => {
    return <div className="h-100 w-100" {...props}>{element}</div>
}
