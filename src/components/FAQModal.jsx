
import React, {useState} from "react"
import {Button, Modal} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
// import AccordionItem from 'react-bootstrap/Accordion'

export default class FAQModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            temp : [
                {"question":"Online play and Nintendo Switch Online app","answer":"The Nintendo Switch Online service lets Nintendo Switch owners enjoy online play in compatible games like Splatoon 2, ARMS, and Mario Kart 8 Deluxe."},
                {"question":"Classic Game Libraries","answer":"Members can enjoy a growing library of NES games and Super NES games with added online play as part of the paid Nintendo Switch Online membership. With the Nintendo Switch Online smartphone app, you can also voice chat during your play sessions."},
                {"question":"Save Data Cloud Backup","answer":"Players with a Nintendo Switch Online membership can save game data online for compatible games. Save data is linked to your Nintendo Account, so you can access it from any Nintendo Switch system by signing in and downloading your save data."},
                {"question":"Special Offers","answer":"Nintendo Switch Online members in the U.S. and Canada have access to exclusive special offers, such as the option to purchase specially designed classic game controllers for use with the classic game libraries."}]
        }
    }

  handleClose(){ this.setState({
      show: false
  })}

      handleShow(){ this.setState({
      show: true
  })}

    render() {
            return (
        <>
          <Button variant="primary" onClick={this.handleShow.bind(this)}>
            Launch demo modal
          </Button>

            {this.state.temp.map(item =>(
          <Modal
              show={this.state.show}
              onHide={this.handleClose.bind(this)}
              className="w-100"
          >
              <Modal.Dialog className="w-100">
                  <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <div>

                            <Card.Body>
                                {item["answer"]}
                            </Card.Body>

                        </div>
                    </Accordion.Collapse>
                  </Card>
                  </Accordion>
              </Modal.Dialog>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                    Close
                </Button>
            </Modal.Footer>
          </Modal>
                ))}
        </>
  );}
}
