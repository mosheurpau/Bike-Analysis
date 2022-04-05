import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Deshboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("dashboardData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Container fluid className="dashboard-container">
      <Row>
        <Col sm={6}>
          <h5 className="my-4">Month wish Sell</h5>
          <div className="d-flex justify-content-center">
            <LineChart width={350} height={250} data={data}>
              <Line type="monotone" dataKey={"sell"} stroke="#8884d8"></Line>
              <XAxis dataKey="month"></XAxis>
              <Tooltip />
              <YAxis></YAxis>
              <h3>Sell</h3>
            </LineChart>
          </div>
        </Col>
        <Col sm={6}>
          <h5 className="my-4">Investment VS Revenue</h5>
          <div className="d-flex justify-content-center">
            <AreaChart
              width={350}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="investment"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <h5 className="my-4">Investment VS Revenue</h5>
          <div className="d-flex justify-content-center">
            <BarChart width={350} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#8884d8" />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </div>
        </Col>
        <Col sm={6}>
          <h5 className="my-4">Investment VS Revenue</h5>
          <div className="d-flex justify-content-center">
            <PieChart width={350} height={250}>
              <Pie
                data={data}
                dataKey="investment"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="revenue"
                nameKey="month"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
