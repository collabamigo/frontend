
import React from 'react'

class FormSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  shouldComponentUpdate () {

    return true;

}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
        <form>
            <label>
                B-Tech:
                <input
                    checked={this.state.isGoing}
                    name="isGoing"
                    onChange={this.handleInputChange}
                    type="checkbox" 
                />
            </label>

            <br />

            <label>
                M-Tech:
                <input
                    checked={this.state.isGoing}
                    name="isGoing"
                    onChange={this.handleInputChange}
                    type="checkbox"
                />
            </label>
            
            <br />
            
            <label>
                Number of guests:
                <input
                    name="numberOfGuests"            
                    onChange={this.handleInputChange}
                    type="number"
                    value={this.state.numberOfGuests} 
                />
            </label>
        </form>
    );
  }
}

export default FormSignIn;