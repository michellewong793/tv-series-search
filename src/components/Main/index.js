import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SingleSeries from '../SingleSeries';
import Form from '../Form';

const Main = props => (
    <Switch>
        <Route exact path= '/' component={Form}/>
        <Route path='/series/:id' component={SingleSeries}/>
    </Switch>
)

export default Main;
