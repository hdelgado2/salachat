import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login/Login';
import { BrowserRouter,Routes,Route, Outlet } from "react-router-dom";
import Create from './Login/Create';


function Example() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/create_user" element={<Create />} />
            </Routes>
       </BrowserRouter>

        </>
        
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
