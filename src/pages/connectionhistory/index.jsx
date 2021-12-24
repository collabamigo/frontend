
import React from "react";
import {cardSkillSearch} from './index.module.css';
import axios from "utilities/axios";
import backend from "../../env";
import { Card } from "react-bootstrap";
import CardExplorer from "../../components/CardExplorer";

class ConnectionHistory extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            list: [],
            loading: true
        }
    }

    componentDidMount() {
        this.getTeacherIds();
    }

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate() {
        return true;
    }

    caller() {

        if ((this.state.list).length > 1)
            return (
                this.renderCardsIfNeeded()
            )
        else
            return (
                <>
                    Your Connections will be shown here once you connect with others
                </>
            )
    }

    getTeacherIds = () => {
        axios.get(backend + "connect/approvals/", {
            params: {
                format: "json",
            }
        })
            .then((res) =>
                this.setState({ list: [...(res.data), localStorage.getItem("id")], loading: false }))
    };

    renderCardsIfNeeded() {
        return (
            <CardExplorer
                isLoading={this.state.loading}
                parentList={this.state.list}
                showVotingAll
            />
        )
    }

    render() {
        if (this.state.loading)
            return (
                <>
                    <h1 className="col-sm-5 col-md-5">
                        {" "}
                        Fetching Data...

                        {" "}
                    </h1>

                    <div
                        className="spinner-border"
                        role="status"
                    >
                        <span className="sr-only">
                            Loading...
                        </span>
                    </div>
                </>
            )
        else
            return (
                <div className="container-fluid">
                    <Card className={cardSkillSearch}>
                        <Card.Title>
                            <h1 className="col-sm-5 col-md-5">
                                {" "}
                                My Connection History

                                {" "}
                            </h1>
                        </Card.Title>

                        <Card.Body>
                            <div className="row-auto pt-5">
                                <div className="col-auto ps-lg-5">
                                    {this.caller()}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            );

    }
}

export default ConnectionHistory;
