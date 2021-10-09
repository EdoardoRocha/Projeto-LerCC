import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/home'
import TopicOne from '../components/topicOne/topicOne'
import topicTwo from '../components/topicTwo/topicTwo'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/topicOne' component={TopicOne} />
        <Route path='/topicTwo' component={topicTwo} />
        <Redirect from='*' to='/' />
    </Switch>