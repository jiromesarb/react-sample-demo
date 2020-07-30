import React, { createContext, useState } from 'react';
import NavBar from './components/layouts/NavBar';
import ComponentRouter from './router/index';

// Plugins
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import './App.css';

const AppContext = createContext(null);

function ContextWrapper (props) {
    const user = {
        firstName: 'John',
        lastName: 'Doe',
    }
    const [hideLogin, setHideLogin] = useState(false);


    return (
        <AppContext.Provider value={{user, hideLogin, setHideLogin}}>
            {props.children}
        </AppContext.Provider>
    );
}

function App() {

    return (
        <div className="App">
            <Router>
                <ContextWrapper>
                    <NavBar />
                    <ComponentRouter />
                </ContextWrapper>
            </Router>
        </div>
    );
}

export default App;
