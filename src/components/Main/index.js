import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SingleSeries from '../SingleSeries';
import Form from '../Form';

const Main = props => (
    <Switch>
        <Route path={process.env.PUBLIC_URL + '/'}></Route> component={Form}/>
        <Route path='/series/:id' component={SingleSeries}/>
    </Switch>
)

export default Main;
