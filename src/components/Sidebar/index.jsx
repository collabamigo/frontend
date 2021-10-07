import React from 'react'

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function index() {
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={
                    <span className="material-icons-outlined">
                        menu
                    </span>
                    }
                >
                    Dashboard
                </MenuItem>

                <SubMenu
                    icon={
                        <span className="material-icons-outlined">
                            widgets
                        </span>                    
                    }
                    title="Components"
                >
                    <MenuItem>
                        Component 1
                    </MenuItem>

                    <MenuItem>
                        Component 2
                    </MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    )
}

export default index;
