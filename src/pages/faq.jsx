import React from "react"
import FAQModal from "../components/FAQModal";

class Faq extends React.Component{

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(){
        return true
    }
render() {
        return (
            <div>
                Credits to Nintendo Switch Online Service FAQ for these dummy questions and answers printed in console log
                for testing
                <FAQModal />
            </div>
        );
    }
}

export default Faq
