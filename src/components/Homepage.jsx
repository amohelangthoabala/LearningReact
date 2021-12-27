import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetServicesQuery } from '../services/pieceJobAPI';

const {Title} = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetServicesQuery();
    console.log(data);

    return (
        <>
        <Title level={2} className="heading">Piece Job Usage</Title>
        <Row>
            <Col span={12}><Statistic title="Total consultants" value="5" /></Col>
            <Col span={12}><Statistic title="Total Members" value="5" /></Col>
            <Col span={12}><Statistic title="Total consultants" value="5" /></Col>
        </Row>
        </>
    )
}

export default Homepage
