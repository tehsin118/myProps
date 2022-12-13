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

import "./adminDash.scss";
import viewProps from "../../../assets/images/viewProp.png";
import { PieChart, Pie, Sector, Cell } from "recharts";

const DashboardAdmin = () => {
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
      uv: 4000,
      pv: 2400,
      amt: 20,
    },
    {
      name: "May",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "June",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "July",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Aug",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: " Sep",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: " Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov ",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: " Dec",
      uv: 90,
      pv: 4300,
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
                <LineChart
                  width={600}
                  height={240}
                  data={overviewChart}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </div>
            </div>
          </div>
          <div className="dash-revenue-content">
            <div className="left-content"></div>
            <div className="right-content">
              <div className="rv-sect-header">
                <h1>Recent Investors</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardAdmin;
