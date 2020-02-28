import React from 'react';
import './App.css';

import Sidebar from './views/components/sidebar/Sidebar'
import SidebarHeader from './views/components/sidebar/SidebarHeader'

import Menu from './views/components/menu/Menu'
import Submenu from './views/components/menu/Submenu'
import MenuItem from './views/components/menu/MenuItem'


function App() {
  return (
    <div className="wrapper">
        <Sidebar>
            <SidebarHeader title="Cloud Toolkit"/>
            <Menu title="Opções de cloud">
                <Submenu title="AWS" expanded={true}>
                    <MenuItem title="Bucket S3"/>
                    <MenuItem title="Organization"/> 
                    <MenuItem title="EC2"/> 
                </Submenu>
                <Submenu title="Azure">
                    <MenuItem title="Page 5"/>
                    <MenuItem title="Page 2"/> 
                    <MenuItem title="Page 3"/> 
                </Submenu>
                <Submenu title="Google">
                    <MenuItem title="Page 5"/>
                    <MenuItem title="Page 2"/> 
                    <MenuItem title="Page 3"/> 
                </Submenu>

                <Submenu title="Geral">
                    <MenuItem title="Page 5"/>
                    <MenuItem title="Page 2"/> 
                    <MenuItem title="Page 3"/> 
                </Submenu>
            </Menu>
        </Sidebar>

        <div id="content"></div>
    </div>
  );
}

export default App;
