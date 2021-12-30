import React, {useState} from 'react'
import {Switch, Route, Link, Routes} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import { Navbar, Homepage, Services, Members, LoginForm } from './components';
import './App.css';

const App = () => {
    const [user, setUser] = useState({email: "", password: "", token: ""});
    const [error, setError] = useState("");

    const Login = details =>{
        console.log(details);
    }
  
    const Logout = () => {
        console.log("logout");
    }

    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                {(user.email != "") ?
                (
                    <Layout>
                    <div className="switch">
                        <Routes>
                            <Route exact path="/" element={<Homepage />}/>
                            <Route exact path="/services" element={<Services />}/>
                            <Route exact path="/member" element={<Members />}/>
                        </Routes>
                    </div>
                </Layout>
                ) : (
                    <LoginForm />
                )};

                <div className="footer">
                    <Typography.Title level={5} style={{ color:'white', textAlign: 'center' }}>
                        Piece Job <br />
                        All right reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/services">Service Providers</Link>
                        <Link to="/member">Members</Link>
                        <Link to="/help">Help</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
