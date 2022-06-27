import React from 'react'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import ExerciseDetails from "./components/ExerciseDetails";
import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import "./App.css"
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';

const App = () => {
    return (
        <Box width="400px">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetails />} />
            </Routes>
        </Box>
    )
}

export default App