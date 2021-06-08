
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
            listIndex: 0,
            voteValues: {},
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


    handleVote(teacherId, vote) {
        this.setState((state) => ({
            voteValues: {
                ...(state.voteValues),
                [teacherId]: vote
            }
        }))
        axios.post(backend+"rating/", {
            teacher: teacherId,
            vote: vote,
        })
    }

    handleGetNext() {
        this.setState((state) => ({
            isLoading: true,
            listIndex: state.listIndex + this.props.cardsPerPage
        }), this.fetchData)
    }
    
    handleGetPrev() {
        this.setState((state) => ({
            isLoading: true,
            listIndex: state.listIndex - this.props.cardsPerPage
        }), this.fetchData)
    }

    fetchData(listIndex) {
        if (listIndex === undefined)
            listIndex=this.state.listIndex
        axios.get(backend + "connect/teachersdata/", {
            params: {
                id_list: this.props.parentList.slice(listIndex, listIndex + this.props.cardsPerPage)
            },
        }).then(res1 => axios.get(backend + "rating/").then(res2 => this.setState({
            tempList: res1.data,
            voteValues: res2.data,
            isLoading:false}))
        )
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
    else if (this.props.parentList && this.props.parentList.length)
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
                                onVote={this.handleVote.bind(this)}
                                showConnect={this.props.showConnectAll || this.props.showConnectList.includes(item.id)}
                                showVoting={this.props.showVotingAll || this.props.showVotingList.includes(item.id)}
                                voteValue={(this.state.voteValues[item.id]!==undefined)?this.state.voteValues[item.id]:0}
                            />
                        </div>
                      ))}
                </div>

                <div className="row mt-5">
                    <div className="col" />

                    <div className="col-auto">
                        <button
                            className="btn material-icons btn-primary"
                            disabled={this.state.listIndex<=0}
                            onClick={this.handleGetPrev.bind(this)}
                            type="button"
                        >
                            arrow_back_ios
                        </button>
                    </div>

                    <div className="col-auto">
                        <button
                            className="btn material-icons btn-primary"
                            disabled={this.state.listIndex+this.props.cardsPerPage>=this.props.parentList.length}
                            onClick={this.handleGetNext.bind(this)}
                            type="button"
                        >
                            arrow_forward_ios
                        </button>
                    </div>

                    <div className="col" />
                </div>
            </div>
        )
        else
            return null
}}
export default CardExplorer