//
// import React from "react"
// import PropTypes from "prop-types";
//
// class Step2 extends React.Component() {
//     static propTypes = {
//             currentStep:PropTypes.number.isRequired
//         };
//
//     constructor(props) {
//         super(props);
//         this.state ={
//            currentStep:props.currentStep
//         }
//     }
//
//
//     shouldComponentUpdate () {
//         return true;
//     }
//
//     render(){
//         if (this.state.currentStep !== 2) {
//             return null
//         }
//         return(
//             <div className="form-group">
//                 <label htmlFor="username">
//                     demo
//                 </label>
//
//                 <button
//                     className="btn btn-primary mb-2"
//                     onChange={this.handleChange}
//                     type="submit"
//                     value="Submit"
//                 >
//                     Submit
//                 </button>
//             </div>
//       );
//     }
// }
//
// export default Step2