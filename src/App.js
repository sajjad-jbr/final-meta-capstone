import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MenuPage from "./Pages/MenuPage";
import ReservationsPage from "./Pages/ReservationsPage";
import OrderOnline from "./Pages/OrderOnline";
import LoginPage from "./Pages/LoginPage";

function App() {
    return (
        <>
            <Header/>

            <Main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/menu" element={<MenuPage/>}/>
                    <Route path="/reservations" element={<ReservationsPage/>}/>
                    <Route path="/order-online" element={<OrderOnline/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </Main>
            <Footer/>
        </>
    );
}

export default App;
