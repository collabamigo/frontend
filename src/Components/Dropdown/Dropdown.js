import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function signOut() {
  var auth2 = window.gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    localStorage.clear();
    window.location.href = "/";

  });
}
function Down() {
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    // console.log(e);
      if (e==="signOut")
          signOut()
      setValue(e)
      console.log(value)
  }

  return (
    <div>
      <DropdownButton
      alignRight
      title="Profile"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >

              <Dropdown.Item eventKey="profile">Profile</Dropdown.Item>
              <Dropdown.Item eventKey="settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="signOut">Sign Out</Dropdown.Item>
      </DropdownButton>

        {/*<span className="material-icons" >*/}
        {/*    account_circle*/}
        {/*    </span>*/}

      {/*<h4>{value}</h4>*/}

    </div>
  );
}
//TODO: Aditya look over material-icons
export default Down;
