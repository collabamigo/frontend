import React from "react";
import Card from "react-bootstrap/Card";
import './CARDS_P.css'

class CARDS_P extends React.Component {

    render(){
        return(
            <div className="">
              <Card style={{ width: "22rem" }} >
                <Card.Body>
                  <Card.Title style={{ color: "orange" }}>Shikhar Sharma</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    I am Iron Man
                  </Card.Subtitle>
                  <Card.Text>
                    I love machine learning and love implementing it with Open cv
                  </Card.Text>
                  <Card.Link href="#"> lol </Card.Link>
                </Card.Body>
              </Card>
            </div>
        )
    }
}

export default CARDS_P;