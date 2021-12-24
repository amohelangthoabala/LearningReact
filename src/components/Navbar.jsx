import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, MenuOutlined, FundOutlined} from '@ant-design/icons';
import icon from '../img/pj-icon.png';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src= {icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Piece Job</Link>
                </Typography.Title>
                <Button className="menu-control-container">

                </Button>
            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />} >
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />} >
                    <Link to="/services">Service Providers</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />} >
                    <Link to="/member">Members</Link>
                </Menu.Item>
                <Menu.Item icon={<HomeOutlined />} >
                    <Link to="/help">Help</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
