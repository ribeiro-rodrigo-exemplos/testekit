import React from 'react';

import './App.css';

import Sidebar from './views/components/sidebar/Sidebar'
import SidebarHeader from './views/components/sidebar/SidebarHeader'

import Menu from './views/components/menu/Menu'
import Submenu from './views/components/menu/Submenu'
import MenuItem from './views/components/menu/MenuItem'

import AppRouter from './views/components/router/Router'


function App() {
  return (
    <div className="wrapper">
        <AppRouter>
            <Sidebar>
                <SidebarHeader title="Cloud Toolkit"/>
                <Menu title="Opções de cloud">
                    <Submenu title="AWS" expanded={true}>
                        <MenuItem routePath="/buckets" title="Bucket S3"/>
                        <MenuItem routePath="/organizations" title="Organization"/> 
                        <MenuItem routePath="/machines" title="EC2"/> 
                    </Submenu>
                    <Submenu title="Azure">
                        <MenuItem routePath="" title="Page 5"/>
                        <MenuItem routePath="" title="Page 2"/> 
                        <MenuItem routePath="" title="Page 3"/> 
                    </Submenu>
                    <Submenu title="Google">
                        <MenuItem routePath="" title="Page 5"/>
                        <MenuItem routePath="" title="Page 2"/> 
                        <MenuItem routePath="" title="Page 3"/> 
                    </Submenu>

                    <Submenu title="Geral">
                        <MenuItem routePath="" title="Page 5"/>
                        <MenuItem routePath="" title="Page 2"/> 
                        <MenuItem routePath="" title="Page 3"/> 
                    </Submenu>
                </Menu>
            </Sidebar>
        </AppRouter>
    </div>
  );
}

export default App;
