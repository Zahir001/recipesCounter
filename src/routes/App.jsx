import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Home from "./Home";

const App = () => {
   
    return (
        <>
            <div>
                <div className="sideHeaderClass">
                    <Sidebar />
                </div>
                <div className="rightSection">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default App;
