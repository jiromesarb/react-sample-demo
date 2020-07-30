import React from 'react';

// Router
import {
    Switch,
    Route,
} from 'react-router-dom';

// Import Components
import Login from './../components/Login';
import ForgotPassword from './../components/ForgotPassword';
import NewPassword from './../components/NewPassword';

// User Component
import UserIndex from './../components/views/users/User';
import UserCreate from './../components/views/users/Create';
import UserEdit from './../components/views/users/Edit';

export default function ComponentRouter () {
    return (
        <Switch>
            <Route exact path={["/", "/login"]}>
                <Login/>
            </Route>
            <Route path={["/forgot-password"]}>
                <ForgotPassword/>
            </Route>

            <Route path={["/new-password"]}>
                <NewPassword/>
            </Route>

            <Route exact path={["/users"]}>
                <UserIndex/>
            </Route>
            <Route path={["/users/create"]}>
                <UserCreate/>
            </Route>
            <Route path={["/users/edit"]}>
                <UserEdit/>
            </Route>
        </Switch>
    );
}
