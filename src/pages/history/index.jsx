
import React from "react";
import {cardSkillSearch} from './index.module.css';
import axios from "utilities/axios";
import Loading from "../../components/Loading";
import EventTalkCard from "../../common/HomePageCards/EventTalkCard";
import RCarousel from "react-multi-carousel";

class EventHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventList: undefined,
            loading: true
        }
    }

    componentDidMount() {
        axios.get("form/participation-history/")
            .then((res) =>
                this.setState({ eventList: res.data, loading: false }))
    }

    shouldComponentUpdate(){
        return true
    }

    caller() {
        console.log(this.state.eventList[0])
        if (this.state.eventList !== undefined && (this.state.eventList[0] !== null))
            return (
                this.renderCardsIfNeeded()
            )
        else
            return (
                <>
                    Your Past events will appear once you have participated
                </>
            )
    }

    renderCardsIfNeeded() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: {max: 4000, min: 3000},
                items: 5
            },
            desktop: {
                breakpoint: {max: 3000, min: 1024},
                items: 3
            },
            tablet: {
                breakpoint: {max: 1024, min: 464},
                items: 2
            },
            mobile: {
                breakpoint: {max: 464, min: 0},
                items: 1
            }
        };
        return (
            <RCarousel responsive={responsive}>
                {this.state.eventList.map((option) => (
                    <EventTalkCard
                        element={option}
                        key={option.description}
                    />
                ))}
            </RCarousel>
        )
    }

    render() {
        if (this.state.loading)
            return (
                <Loading />
            )
        else
            return (
                <div className="container-fluid">
                    <div className={cardSkillSearch}>
                        <h1 className="text-center">
                            {" "}
                            Your Previous Events

                            {" "}
                        </h1>

                        <div className="row-auto pt-5">
                            <div className="col-auto ps-lg-5">
                                {this.caller()}
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default EventHistory;
