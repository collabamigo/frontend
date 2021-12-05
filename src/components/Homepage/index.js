// // // import Link from "common/Link";
// // // import Card from "react-bootstrap/Card";
// // // import ClubList from 'components/ClubList/ClubList.js';
// // import React from "react";
// // import axios from "utils/axios";
// // import backend from "env";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// // // import {Fade} from "react-awesome-reveal";
// // // import {isMobile} from "react-device-detect";
// // // import styles from './homepage.module.css';
// // // import ClubDashboard from "../components/ClubDasboard";
// // // import {SvgIcon} from "common/SvgIcon";

// // import {checkLoginStatus} from "utils/auth";

// // export default class AuthenticatedHome extends React.Component {
// //     constructor(props) {
// //         super(props);

// //         this.state = {
// //             first: "BECOME A CONTRIBUTOR",
// //             second: "Contribute",
// //             third:
// //                 "Solve other's doubts and be the mentor you always wanted.\n" +
// //                 "Using our platform you can reach a larger community.",
// //             clubList: [
// //                 {name: "Tasveer", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "MicDrop", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "Byld", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "D4rkcode", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "Litsoc", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "Meraki", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "MUSE", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "Philsoc", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "Electroholics", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "Cyborg", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "Astronuts", logo: "https://via.placeholder.com/70X70"},
// //                 {name: "D4rkcode", logo: "https://via.placeholder.com/70X70"},
// //             ],
// //         };
// //     }

// //     async componentDidMount() {
// //         if (await checkLoginStatus())
// //             axios.get(backend + "club/club").then((res) => {
// //                 let clubLists = [];
// //                 for (let i = 0; i < res.data.length; i++) {
// //                     clubLists.push(res.data[i]);
// //                 }
// //                 this.setState({clubList: clubLists});
// //             });
// //         axios.get(backend + "connect/teacher?format=json").then((res) => {
// //             if (res.data.length)
// //                 this.setState({
// //                     first: "VIEW DASHBOARD",
// //                     second: "Dashboard",
// //                     third:
// //                         "Hi Collaborator," +
// //                         "\nView and edit your skills here. You can also see your " +
// //                         "work summary and the hot trending skills on the platform ",
// //                 });
// //         });
// //     }

// //     shouldComponentUpdate() {
// //         return true;
// //     }

// //     render() {

// //         const responsive = {
// //             superLargeDesktop: {
// //               // the naming can be any, depends on you.
// //               breakpoint: { max: 4000, min: 3000 },
// //               items: 5
// //             },
// //             desktop: {
// //               breakpoint: { max: 3000, min: 1024 },
// //               items: 3
// //             },
// //             tablet: {
// //               breakpoint: { max: 1024, min: 464 },
// //               items: 2
// //             },
// //             mobile: {
// //               breakpoint: { max: 464, min: 0 },
// //               items: 1
// //             }
// //           };

// //         return (

// //             // <div>
// //             //     <div className="firstSection">
// //             //         <div className={styles.firstsectionInner + " row"}>
// //             //             <div className={styles.firstsectionInnerleft + " col-sm-5 col-md-5 col-lg-5"} >
// //             //                 hello
// //             //             </div>

// //             //             <div className={styles.firstsectionInnerright + " col-sm-7 col-md-7 col-lg-7"}>
// //             //                 hello
// //             //             </div>
// //             //         </div>
// //             //     </div>

// //             //     <div className="secondSection">
// //             //         <div className={styles.secondsectionInner}>
// //             //             <div className={styles.secondsectionHeading}>
// //             //                 {' '}
// //             //                 Competition
// //             //             </div>

// //             //             <div className={styles.secondsectionMiddle}>
// //             //                 <Carousel responsive={responsive}>
// //             //                     <div>
// //             //                         Item 1
// //             //                     </div>

// //             //                     <div>
// //             //                         Item 2
// //             //                     </div>

// //             //                     <div>
// //             //                         Item 3
// //             //                     </div>

// //             //                     <div>
// //             //                         Item 4
// //             //                     </div>
// //             //                 </Carousel>
// //             //             </div>

// //             //             <div className={styles.secondsectionFooting}>
// //             //                 {' '}
// //             //                 Competition
// //             //             </div>

// //             //         </div>

// //             //     </div>
// //             // </div>
// //             <Carousel responsive={responsive}>
// //                 <div>
// //                     Item 1
// //                 </div>

// //                 <div>
// //                     Item 2
// //                 </div>

// //                 <div>
// //                     Item 3
// //                 </div>

// //                 <div>
// //                     Item 4
// //                 </div>
// //             </Carousel>





// //             // <div className=" h-75 w-100 justify-content-center card-group ">
// //             //     <div className="row ">
// //             //         <Fade
// //             //             className="col-lg-4 col-md-6 col-sm-12 h-auto mt-2 mb-3 card-group"
// //             //             direction={isMobile ? "left" : "up"}
// //             //             triggerOnce
// //             //         >
// //             //             <Card className="h-auto card ms-4 mr-1 zoom-my-card min-vh-80 justify-content-center mb-3">
// //             //                 <div className="justify-content-center">
// //             //                     <SvgIcon
// //             //                         src="help_others.svg"
// //             //                         width="97%"
// //             //                     />
// //             //                 </div>

// //             //                 <Card.Body className="mt-3">
// //             //                     <Card.Title className="fw-bold header-color">
// //             //                         {this.state.first}
// //             //                     </Card.Title>

// //             //                     <br />

// //             //                     <Card.Text className="card-text text-muted h5">
// //             //                         {this.state.third}
// //             //                     </Card.Text>
// //             //                 </Card.Body>

// //             //                 <Card.Footer className="footer-custom pb-4">
// //             //                     <Link
// //             //                         className="col-auto btn btn-primary"
// //             //                         to="/help"
// //             //                     >
// //             //                         {this.state.second}
// //             //                     </Link>
// //             //                 </Card.Footer>
// //             //             </Card>

// //             //             <Card className="card h-auto mx-2 zoom-my-card mb-3">
// //             //                 <SvgIcon
// //             //                     height="56%"
// //             //                     src="ask_for_help.svg"
// //             //                     width="100%"
// //             //                 />

// //             //                 <Card.Body className="mt-3">
// //             //                     <Card.Title className="fw-bold header-color">
// //             //                         GET SOLUTIONS
// //             //                     </Card.Title>

// //             //                     <br />

// //             //                     <Card.Text className="card-text h5 text-muted ">
// //             //                         <span>
// //             //                             Stack Overflow:404!
// //             //                         </span>
// //             //                         Answer not found,

// //             //                         <br />
// //             //                         The button below can solve it.
// //             //                     </Card.Text>
// //             //                 </Card.Body>

// //             //                 <Card.Footer className="footer-custom pb-4">
// //             //                     <Link
// //             //                         className="col-auto btn btn-primary"
// //             //                         to="/ask"
// //             //                     >
// //             //                         Ask for help
// //             //                     </Link>
// //             //                 </Card.Footer>
// //             //             </Card>

// //             //             <Card className="card h-auto mx-2 zoom-my-card mb-3">
// //             //                 <SvgIcon
// //             //                     height="56%"
// //             //                     src="collaborate.svg"
// //             //                     width="100%"
// //             //                 />

// //             //                 <Card.Body className="mt-3">
// //             //                     <Card.Title className="card-title fw-bold header-color">
// //             //                         LET&apos;S COLLABORATE
// //             //                     </Card.Title>

// //             //                     <br />

// //             //                     <Card.Text className="card-text h5 text-muted">
// //             //                         Find new projects to work. Apply for teams
// //             //                         and Collaborations. Lets keep the learning
// //             //                         and helping community alive.
// //             //                     </Card.Text>
// //             //                 </Card.Body>

// //             //                 <Card.Footer className="footer-custom pb-4">
// //             //                     <Link
// //             //                         className="col-auto btn btn-primary"
// //             //                         to="/event"
// //             //                     >
// //             //                         Event Page
// //             //                     </Link>
// //             //                 </Card.Footer>
// //             //             </Card>
// //             //         </Fade>
// //             //     </div>

// //             //     <div className="row">
// //             //         <Fade
// //             //             className=" h-auto mt-2 mb-3 "
// //             //             direction={isMobile ? "left" : "up"}
// //             //             triggerOnce
// //             //         >
// //             //             <Card className="card h-auto mx-2 zoom-my-card mb-3">

// //             //                 <Card.Body className="mt-3">
// //             //                     <Card.Title className="card-title fw-bold header-color text-left">
// //             //                         Associated Clubs
// //             //                     </Card.Title>

// //             //                     <br />

// //             //                     <Card.Text className="card-text h5 text-muted">
// //             //                         <div>
// //             //                             Find new projects to work. Apply for teams
// //             //                             and Collaborations. Lets keep the learning
// //             //                             and helping community alive.ggffyyfyt
// //             //                         </div>

// //             //                         <br />

// //             //                         <br />

// //             //                         <div>
// //             //                             <ClubList
// //             //                                 ItemList={this.state.clubList}
// //             //                                 Type="Club"
// //             //                             />
// //             //                         </div>
// //             //                     </Card.Text>
// //             //                 </Card.Body>
// //             //             </Card>
// //             //         </Fade>

// //             //     </div>


// //             // </div>
// //         );
// //     }
// // }

// // // TODO: Attribution to freepik.com pending


// import React from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// export default function index() {
//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };

//     return (
//         <div>
//             <Carousel responsive={responsive}>
//                 <div>
//                     Item 1
//                 </div>

//                 <div>
//                     Item 2
//                 </div>

//                 <div>
//                     Item 3
//                 </div>

//                 <div>
//                     Item 4
//                 </div>
//             </Carousel>
//             ;
//         </div>
//     )
// }

import "react-multi-carousel/lib/styles.css";
import React from "react";
import Carousel from "react-multi-carousel";

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
function Index({ deviceType }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
      <Carousel responsive={responsive}>
          <div>
              Item 1
          </div>

          <div>
              Item 2
          </div>

          <div>
              Item 3
          </div>

          <div>
              Item 4
          </div>
      </Carousel>
  );
}
export default Index;
