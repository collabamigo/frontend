import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


function Down() {
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
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

              <Dropdown.Item eventKey="Profile">Profile</Dropdown.Item>
              <Dropdown.Item eventKey="Settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="Log Out">Log Out</Dropdown.Item>
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