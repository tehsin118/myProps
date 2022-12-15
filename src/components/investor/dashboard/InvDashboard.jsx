import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./invDashboard.scss";
import viewProps from "../../../assets/images/viewProp.png";
import member from "../../../assets/images/recentmmb.png";
import { PieChart, Pie, Sector, Cell } from "recharts";
import NewlyInvested from "./InvInvestment";

const InvDashboard = () => {
  const investor = [
    { name: "Group A", value: 700 },
    { name: "Group B", value: 1000 },
  ];
  const investorColor = ["#FD8539", "#BDBDBD"];
  // Profit chart
  const Tprofit = [
    { name: "Group A", value: 1800 },
    { name: "Group B", value: 1000 },
  ];
  const TprofitColor = ["#4879F5", "#BDBDBD"];

  //last month Profit
  const lMProfit = [
    { name: "Group A", value: 1800 },
    { name: "Group B", value: 1000 },
  ];
  const lMProfitColor = ["#2ED480", "#BDBDBD"];

  //investor Profit
  const investorProfit = [
    { name: "Group A", value: 900 },
    { name: "Group B", value: 1900 },
  ];
  const investorProfitColor = ["#F45252", "#BDBDBD"];
  // -----------------------------overview chart Data

  const overviewChart = [
    {
      name: "April",
      sold: 4000,
      Rent: 2400,
      amt: 20,
    },
    {
      name: "May",
      sold: 3000,
      Rent: 1398,
      amt: 2210,
    },
    {
      name: "June",
      sold: 2000,
      Rent: 9800,
      amt: 2290,
    },
    {
      name: "July",
      sold: 2780,
      Rent: 3908,
      amt: 2000,
    },
    {
      name: "Aug",
      sold: 1890,
      Rent: 4800,
      amt: 2181,
    },
    {
      name: " Sep",
      sold: 2390,
      Rent: 3800,
      amt: 2500,
    },
    {
      name: " Oct",
      sold: 3490,
      Rent: 4300,
      amt: 2100,
    },
    {
      name: "Nov ",
      sold: 3490,
      Rent: 4300,
      amt: 2100,
    },
    {
      name: " Dec",
      sold: 90,
      Rent: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <section className="admin-dashoard">
        <h1 className="sect-head">Dashboard</h1>
        <div className="admin-dashboard-content">
          <div className="dash-top-content">
            <div className="left-content">
              <div className="lt-content">
                <div className="dashViewProps">
                  <a href="#">
                    <img src={viewProps} alt="" className="img-fluid" />
                  </a>
                </div>

                <div className="invest-profit-wrapper">
                  {/* Total Investor View */}
                  <div className="v-invest">
                    <h2>
                      View <br /> Investor
                    </h2>

                    <PieChart width={70} height={70}>
                      <Pie
                        data={investor}
                        innerRadius={15}
                        outerRadius={35}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {investor.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={investorColor[index % investorColor.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                  {/* Total Profit */}
                  <div className="v-invest">
                    <div className="v-profit ">
                      <p>Total Profit</p>
                      <h1>
                        90 <span>%</span>
                      </h1>
                    </div>

                    <PieChart width={70} height={70}>
                      <Pie
                        data={Tprofit}
                        innerRadius={15}
                        outerRadius={35}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {Tprofit.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={TprofitColor[index % TprofitColor.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                </div>

                <div className="invest-profit-wrapper">
                  {/* Last Month Profit graph */}
                  <div className="v-invest">
                    <div className="v-profit ">
                      <p>Profit in last month</p>
                      <h1>
                        90 <span>%</span>
                      </h1>
                    </div>

                    <PieChart width={70} height={70}>
                      <Pie
                        data={lMProfit}
                        innerRadius={15}
                        outerRadius={35}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {lMProfit.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={lMProfitColor[index % lMProfitColor.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>

                  {/* Investore Profit graph */}

                  <div className="v-invest">
                    <div className="v-profit ">
                      <p>Total Profit</p>
                      <h1>
                        90 <span>%</span>
                      </h1>
                    </div>

                    <PieChart width={70} height={70}>
                      <Pie
                        data={investorProfit}
                        innerRadius={15}
                        outerRadius={35}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {investorProfit.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              investorProfitColor[
                                index % investorProfitColor.length
                              ]
                            }
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-content">
              <div className="overview-chart">
                {/* <ResponsiveContainer className="bg-danger"> */}
                <LineChart
                  width={600}
                  height={240}
                  data={overviewChart}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 10,
                    bottom: 5,
                  }}
                  className="line-chart"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Rent"
                    stroke="#216FED"
                    activeDot={{ r: 8 }}
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="sold"
                    stroke="#6C5DD3"
                    strokeWidth={2}
                  />
                </LineChart>
                {/* </ResponsiveContainer> */}
              </div>
            </div>
          </div>

          <div className="dash-revenue-content">
            <div className="left-content"></div>
            <div className="right-content">
              <div className="rv-sect-header">
                <h1>Other Investors</h1>
              </div>

              <div className="recent-investors">
                <div className="row">
                  <div className="col-6 left d-flex mb-3">
                    <div className="mmbr-img">
                      <img src={member} alt="" />
                    </div>
                    <div className="member-detail">
                      <h6 className="member-name">Chynita Heree</h6>
                      <p className="customer-type">Regular Customer</p>
                    </div>
                  </div>
                  <div className="col-6 left d-flex mb-3">
                    <div className="mmbr-img">
                      <img src={member} alt="" />
                    </div>
                    <div className="member-detail">
                      <h6 className="member-name">Chynita Heree</h6>
                      <p className="customer-type">Regular Customer</p>
                    </div>
                  </div>
                  <div className="col-6 left d-flex mb-3">
                    <div className="mmbr-img">
                      <img src={member} alt="" />
                    </div>
                    <div className="member-detail">
                      <h6 className="member-name">Chynita Heree</h6>
                      <p className="customer-type">Regular Customer</p>
                    </div>
                  </div>
                  <div className="col-6 left d-flex mb-3">
                    <div className="mmbr-img">
                      <img src={member} alt="" />
                    </div>
                    <div className="member-detail">
                      <h6 className="member-name">Chynita Heree</h6>
                      <p className="customer-type">Regular Customer</p>
                    </div>
                  </div>
                  <div className="col-6 left d-flex mb-3">
                    <div className="mmbr-img">
                      <img src={member} alt="" />
                    </div>
                    <div className="member-detail">
                      <h6 className="member-name">Chynita Heree</h6>
                      <p className="customer-type">Regular Customer</p>
                    </div>
                  </div>
                  <div className="col-6 left d-flex mb-3">
                    <div className="mmbr-img">
                      <img src={member} alt="" />
                    </div>
                    <div className="member-detail">
                      <h6 className="member-name">Chynita Heree</h6>
                      <p className="customer-type">Regular Customer</p>
                    </div>
                  </div>
                  <div className="col-6 left d-flex mb-3">
                    <div className="mmbr-img">
                      <img src={member} alt="" />
                    </div>
                    <div className="member-detail">
                      <h6 className="member-name">Chynita Heree</h6>
                      <p className="customer-type">Regular Customer</p>
                    </div>
                  </div>
                  <div className="col-6 left d-flex mb-3">
                    <div className="mmbr-img">
                      <img src={member} alt="" />
                    </div>
                    <div className="member-detail">
                      <h6 className="member-name">Chynita Heree</h6>
                      <p className="customer-type">Regular Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="new-invested">
            <NewlyInvested />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvDashboard;
