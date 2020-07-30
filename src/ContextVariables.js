import React, { useState } from 'react';



export default function ContextWrapper (props) {
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
export const AppContext = React.createContext(ContextWrapper);
