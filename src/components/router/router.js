import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AllComments } from '../../pages/allComments/allComments';
import { SingleComment } from '../../pages/singleComment/singleComment';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AllComments} />
                <Route exact path="/singleComment" component={SingleComment} />
            </Switch>
        </BrowserRouter>
    )
}
