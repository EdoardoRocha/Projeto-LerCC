import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import {Home} from '../components/home/home'
import {TopicOne} from '../components/topicOne/topicOne'
import {topicTwo} from '../components/topicTwo/topicTwo'
import { TopicThree } from '../components/topicThree/topicThree'
import { TopicFour } from '../components/topicFour/topicFour'
import { TopicFive } from '../components/topicFive/topicFive'

export function Routes(props) {
return    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/topicOne' component={TopicOne} />
        <Route path='/topicTwo' component={topicTwo} />
        <Route path='/topicThree' component={TopicThree} />
        <Route path='/topicFour' component={TopicFour} />
        <Route path='/topicFive' component={TopicFive} />
        <Redirect from='*' to='/' />
    </Switch>
}
    