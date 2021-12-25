import React  from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Boxes from './Boxes';

class Clublist extends React.Component {
    static propTypes = {
        ItemList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
        Type: PropTypes.string.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {
            next:3,
            arrayForHoldingboxes : [],
            boxesPerPage: 3,
            initial: true
        }
        this.loopWithSlice = this.loopWithSlice.bind(this);
        this.handleShowMoreboxes = this.handleShowMoreboxes.bind(this);
    }

    componentDidMount() {
        this.loopWithSlice(0, this.state.boxesPerPage);
    }

    shouldComponentUpdate()
    {return true;}

    componentDidUpdate() {
        if (this.props.ItemList.length !== 0 && this.state.initial) {
            this.loopWithSlice(0, this.state.boxesPerPage);
        }
    }

    loopWithSlice(start, end){
        this.setState((prevState) => ({
            initial: false,
            arrayForHoldingboxes: prevState.arrayForHoldingboxes.concat(this.props.ItemList.slice(start, end)) }))

        // this.setState((prevState) => ({ boxesToShow: prevState.arrayForHoldingboxes }))
        // this.setState({arrayForHoldingboxes:this.state.arrayForHoldingboxes.concat(this.props.ItemList.slice(start, end))})
        // this.setState({boxesToShow:this.state.arrayForHoldingboxes})
      }

    handleShowMoreboxes(){
        this.setState((prevState) => ({ next: prevState.next + prevState.boxesPerPage }))
        this.loopWithSlice(this.state.next, this.state.next + this.state.boxesPerPage);
        // this.setState({next:this.state.next + this.state.boxesPerPage});
    }
    render() {
        return (
            <div>
                {this.props.ItemList.length>0 ?
                    <Boxes
                        Type={this.props.Type}
                        boxesToRender={this.state.arrayForHoldingboxes}
                    />
                    : null}

                <Button onClick={this.handleShowMoreboxes}>
                    Load more
                </Button>
            </div>
        )
    }
}

export default Clublist