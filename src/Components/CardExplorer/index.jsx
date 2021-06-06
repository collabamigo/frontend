
import React from 'react';
import PropTypes from "prop-types";
import CardsP from "../CardsP/CardsP";
import axios from "axios";
import backend from "../../env";


class CardExplorer extends React.Component{


    static propTypes = {
        cardsPerPage: PropTypes.number,
        isLoading: PropTypes.bool,
        onConnect: PropTypes.func,
        parentList: PropTypes.arrayOf(PropTypes.string).isRequired,
        showConnectAll: PropTypes.bool,
        showConnectList: PropTypes.arrayOf(PropTypes.string),
        showVotingAll: PropTypes.bool,
        showVotingList: PropTypes.arrayOf(PropTypes.string),
    }


    static defaultProps = {
        cardsPerPage: 4,
        isLoading: false,
        onConnect: () => {},
        showConnectAll: false,
        showConnectList: [],
        showVotingAll: false,
        showVotingList: [],

    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            tempList: [{}],
            listIndex: 0
        }
    }


    componentDidMount() {
        if (this.props.parentList && this.props.parentList.length)
            this.fetchData()
    }

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {
        return true;
    }

    componentDidUpdate(prevProps) {
        if (this.props.parentList !== prevProps.parentList)
            this.fetchData()
    }

    handleGetNext() {
        this.setState((state) => ({
            isLoading: true,
            listIndex: state.listIndex + this.props.cardsPerPage
        }))
        this.fetchData()
    }    
    
    handleGetPrev() {
        this.setState((state) => ({
            isLoading: true,
            listIndex: state.listIndex - this.props.cardsPerPage
        }))
        this.fetchData()
    }        

    fetchData() {
        console.log(this.props.parentList)
        axios.get(backend + "connect/teachersdata/", {
            params: {
                id_list: this.props.parentList.slice(this.state.listIndex, this.state.listIndex + this.props.cardsPerPage)
            },
        }).then(r => this.setState({
            tempList: r.data,
            isLoading:false
        }))
    }

    render () {
    if (this.state.isLoading || this.props.isLoading)
        return (
            <div className="float-centre">
                <div
                    className="spinner-border"
                    role="status"
                >
                    <span className="sr-only">
                        Loading...
                    </span>
                </div>
            </div>
            )
    else
        return (
            <div>
                <div className="row">
                    {this.state.tempList.map(item => (
                        <div
                            className="col-auto"
                            key={item.id}
                        >
                            <CardsP
                                Git={item.Gitname}
                                batch={item.degree}
                                course={item.course}
                                key_value={item.id}
                                linked={item.Linkedin}
                                name={item.First_Name + " " + item.Last_Name}
                                onConnect={this.props.onConnect}
                                showConnect={this.props.showConnectAll || this.props.showConnectList.includes(item.id)}
                                showVoting={this.props.showVotingAll || this.props.showVotingList.includes(item.id)}
                            />
                        </div>
                      ))}
                </div>

                <div className="row">
                    <div className="col-1" />

                    <div className="col-auto">
                        <span
                            className="btn material-icons"
                            onClick={this.handleGetPrev.bind(this)}
                        >
                            arrow_back_ios
                        </span>
                    </div>

                    <div className="col-auto">
                        <span
                            className="btn material-icons"
                            onClick={this.handleGetNext.bind(this)}
                        >
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            </div>
        )
}}
export default CardExplorer
