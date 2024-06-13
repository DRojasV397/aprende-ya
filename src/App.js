
// import './css/app.css';
import './scss/app.scss'
import "react-toastify/dist/ReactToastify.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";


import Login from "./screens/loginScreen/LoginScreen";
import SignUp from "./screens/signUpScreen/SignUpScreen";
import Principal from "./screens/principal/Principal";
import Profile from "./components/auth/profile";
import { ToastContainer } from "react-toastify";
import React, { useEffect } from "react";
import { useState } from "react";
import { auth } from "./components/auth/firebase";
import FormCreate from './components/createCourse/formCreate/FormCreate';
import HomeScreen from './screens/homeScreen/HomeScreen';
import CrearAsesoriaScreen from './screens/crearAsesoria/CrearAsesoria';
import ProfileScreen from './screens/profileScreen/ProfileScreen';
import FAQ from './screens/frequentlyAskedQuestions/FAQ'



function App() {
    const [user, setUser] = useState();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        });
    });
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={user ? <Navigate to="/home" /> : <Principal />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/formCreate" element={<FormCreate />} />
                <Route path="/crearAsesoria" element={<CrearAsesoriaScreen/>} />
                <Route path="/myAccount" element={<ProfileScreen/>} />
                <Route path="/faq" element={<FAQ/>} />
            </Routes>
            <ToastContainer />
        </Router>
    );
}

export default App;