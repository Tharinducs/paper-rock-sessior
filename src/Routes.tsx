import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';

export function AppRoutes() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    </>);
}
