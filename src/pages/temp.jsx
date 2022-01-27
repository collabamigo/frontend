
import React from "react";
import Loading from "../components/Loading";
import "react-multi-carousel/lib/styles.css";

class temp extends React.Component {
    constructor(props){
        super(props);
        this.image1Ref = React.createRef()
        this.state = {
        }
    }

    componentDidMount() {}

    shouldComponentUpdate(){
        return true
    }

    handleUpload (image){
        console.log(image.size)

    }

    render() {
        if (this.state.loading)
            return (
                <Loading />
            )
        else
            return (
                <div className="container-fluid">
                    <div
                        className="my-auto mx-3"
                        onClick={() => this.image1Ref.current.click()}
                        type="button"
                    />

                    <input
                        className=""
                        // className="d-none"
                        onChange={(e)=>this.handleUpload(e.target.files[0])}
                        ref={this.image1Ref}
                        type="file"
                    />
                </div>
            );
    }
}

export default temp;
