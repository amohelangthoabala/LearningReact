import React from 'react'
import {Switch, Route, Link, Routes} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import { Navbar, Homepage, Services, Members } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="switch">
                        <Routes>
                            <Route exact path="/" element={<Homepage />}/>
                            <Route exact path="/services" element={<Services />}/>
                            <Route exact path="/member" element={<Members />}/>
                        </Routes>
                    </div>
                </Layout>
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
