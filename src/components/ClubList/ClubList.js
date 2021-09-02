/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



class DynamicCard extends Component {
    static propTypes = {
        element: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.handlechangemodalshow = this.handlechangemodalshow.bind(this);
        this.state = {modalshow: false,btnavail:true}
    }

    handler(event){
        this.handlechangebtnavail(event);
    }

    handlechangebtnavail(event) {
        this.setState({btnavail: !this.state.btnavail})
    }

    handlechangemodalshow(event) {
        this.setState({modalshow: !this.state.modalshow})
    }

    render() {
        console.log(this.props.element, " hiiii")
        if(this.props.element === undefined) {
            return null;
        }
        else{
        return (
            <tr>
                <td>
                    {this.props.element.name}
                </td>

                <td>
                    {this.props.element.logo}
                </td>
            </tr>
                )
            }
    }
}



function Boxes({ boxesToRender }) {
    console.log(boxesToRender, " is post")
    if(boxesToRender === undefined){return null;}
    else if(boxesToRender.length === 0){return null;}
    else{
    return (
        <Table responsive>
            {/* <thead className="text-primary">
                <tr>
                <th>InvoiceID</th>
                <th>Amount</th>
                <th>Associated Company</th>
                <th>Contractor</th>
                <th>Redeem</th>
                </tr>
            </thead> */}

            <tbody>
                {boxesToRender.map((boxdata, index) => (
                    <DynamicCard element={boxdata} />
                ))}
            </tbody>
        </Table>
  );
      }
}

export default class Clublist extends Component {
    static propTypes = {
        clubList: PropTypes.array.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {
            boxToShow: [],
            next:4,
            arrayForHoldingboxes : [],
            boxesPerPage: 4
        }
        this.loopWithSlice = this.loopWithSlice.bind(this);
        this.handleShowMoreboxes = this.handleShowMoreboxes.bind(this);
    }

    loopWithSlice(start, end){
        this.setState({arrayForHoldingboxes:this.state.arrayForHoldingboxes.concat(this.props.clubList.slice(start, end))})
        this.setState({boxesToShow:this.state.arrayForHoldingboxes})
      }

    componentDidMount() {
        this.loopWithSlice(0, this.state.boxesPerPage);
    }

    handleShowMoreboxes(){
        this.loopWithSlice(this.state.next, this.state.next + this.state.boxesPerPage);
        this.setState({next:this.state.next + this.state.boxesPerPage});
    }


    render() {
        console.log(this.props.clubList, "ewww")
        return (
            <div>
                {this.props.clubList.length>0 ?
                    <Boxes boxesToRender={this.state.arrayForHoldingboxes} />
                    : null}

                <Button onClick={this.handleShowMoreboxes}>Load more</Button>
            </div>
        )
    }
}

// export default class ClubBox extends Component {
//     static propTypes = {
//         logo: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//     }

//     shouldComponentUpdate(){
//         return true;
//     }

//     render() {
//         return (
//             <div>
//                 {this.props.name}
//             </div>
//         )
//     }
// }
