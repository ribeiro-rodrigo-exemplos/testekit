import React, { ReactNode } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BucketsPage from '../../pages/Buckets'
import MachinesPage from '../../pages/Machines'
import OrganizationsPage from '../../pages/Organizations'

interface RouterProps{
    children: ReactNode
}
 
export default ({ children }: RouterProps) => (
    <Router>
        { children }
        <div id="content">
            <Switch>
                <Route path="/" exact component={BucketsPage}/>
                <Route path="/buckets" component={BucketsPage}/> 
                <Route path="/machines" component={MachinesPage}/> 
                <Route path="/organizations" component={OrganizationsPage}/>
            </Switch>
        </div>
    </Router>
)