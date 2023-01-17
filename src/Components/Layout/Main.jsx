import React from 'react';
import {Route, Routes, Router, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import HomePage from "../../Pages/HomePage";
import BookingPage from "../../Pages/BookingPage";

function Main(props) {
    return (
        <main style={{margin:"20px 0"}}>
            {props.children}
        </main>
    );
}

export default Main;
