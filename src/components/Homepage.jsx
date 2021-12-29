import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetServicesQuery } from '../services/pieceJobAPI';
import { Services, Members } from '.';
import { Loader } from './Loader';

const {Title} = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetServicesQuery(5);
    const globalStats = data?.data?.serviceName;
    
    if(isFetching) return <Loader />;

    return (
        <>
        <Title level={2} className="heading">Piece Job Usage</Title>
        <Row>
            <Col span={12}><Statistic title="Total consultants" value={globalStats} /></Col>
            <Col span={12}><Statistic title="Total Members" value="5" /></Col>
            <Col span={12}><Statistic title="Total consultants" value="5" /></Col>
        </Row>
        <div className="home-heading-container">
             <Title level={2} className="hme-title">Top 10 services</Title>
             <Title level={3} className="show-more"><Link to="/services">show more</Link></Title>
        </div>
        <Services simplified />
        <div className="home-heading-container"> 
             <Title level={2} className="hme-title">Latest Services</Title>
             <Title level={3} className="show-more"><Link to="/services">show more</Link></Title>
        </div>
        <Members simplified />
        </>
    )
}

export default Homepage
