
import React from 'react'
import './Connect.css'

class Connect extends React.Component {

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div>
                Workin Rn ,
                Peace out
            </div>
        )
    }
}

export default Connect

// import React from 'react';
// import {
//     Link,
// }
//     from "react-router-dom";
// import Card from "react-bootstrap/Card";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "bootstrap/dist/js/bootstrap.min.js";
// import "./Connect.css";
// function App() {

//     return (
//         <div>
//             <section
//                 className="jumbotron text-center"
//                 id="header"
//             >
//                 <h1 className="display-3">
//                     CollabAmigo
//                 </h1>

//                 <p className="lead">
//                     Lets build the team.
//                 </p>

//             </section>

//             <section id="gallery">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4 mb-4">
//                             <Card className="card">
//                                 <img
//                                     alt=""
//                                     className="card-img-top"
//                                     src="https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                                 />

//                                 <Card.Body className="card-body">
//                                     <h5 className="card-title">
//                                         Ask for help
//                                     </h5>

//                                     <p className="card-text">
//                                         This is ask for help. If you have doubts they will be solved.
//                                     </p>

//                                     <Link
//                                         className="btn btn-outline-success btn-sm"
//                                         to="/ask"
//                                     >
//                                         Ask for help
//                                     </Link>

//                                 </Card.Body>
//                             </Card>
//                         </div>

//                         <div className="col-lg-4 mb-4">
//                             <Card className="card">
//                                 <img
//                                     alt=""
//                                     className="card-img-top"
//                                     src="https://images.unsplash.com/photo-1495653797063-114787b77b23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                                 />

//                                 <div className="card-body">
//                                     <h5 className="card-title">
//                                         Help others
//                                     </h5>

//                                     <p className="card-text">
//                                         It is a place where you can find new projects to work upon and gain new experience. One can also apply for helping a team by being a part of it or on interim basis depending on the team. Lets keep the learning and helping community alive.

//                                     </p>

//                                     <Link
//                                         className="btn btn-outline-success btn-sm"
//                                         to="/help"
//                                     >
//                                         Help others
//                                     </Link>

//                                 </div>
//                             </Card>
//                         </div>

//                         <div className="col-lg-4 mb-4">
//                             <Card className="card">
//                                 <img
//                                     alt=""
//                                     className="card-img-top"
//                                     src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
//                                 />

//                                 <div className="card-body">
//                                     <h5 className="card-title">
//                                         Lets collaborate
//                                     </h5>

//                                     <p className="card-text">
//                                         This is Help others. If you have doubts they will be solved. Aditya Will help us place ourselves in this grid , cause I am lazy
//                                     </p>

//                                     <Link
//                                         className="btn btn-outline-success btn-sm"
//                                         to="/collab_connect"
//                                     >
//                                         Lets Collaborate
//                                     </Link>

//                                 </div>
//                             </Card>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </div>
//     );
// }

// export default App;