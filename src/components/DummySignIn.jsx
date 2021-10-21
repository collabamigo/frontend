import React from "react";

class DummySignIn extends React.Component{
    shouldComponentUpdate(){
        return true;
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-primary rounded"
                    onClick={() => window.alert("hello")}
                    type="button"
                >
                    Continue without SignIn
                </button>
            </div>
        )
    }
}

export default DummySignIn;