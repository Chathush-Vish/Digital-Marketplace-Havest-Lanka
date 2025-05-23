import React from "react";
import { Routes, Route } from "react-router-dom";
import Logout from "../components/userManagement/logins/Logout";

function LogoutRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Logout />}></Route>
            </Routes>
        </>
    );
}

export default LogoutRoute;
