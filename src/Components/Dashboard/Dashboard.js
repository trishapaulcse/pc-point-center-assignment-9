import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { AreaChart, Area } from 'recharts';
import { BarChart, Bar } from 'recharts';

const Dashboard = () => {
    const data =
        [
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        ]
    return (
        <div>
            <div class="columns-1 md:columns-2">
                <div>

                    <LineChart width={300} height={300} data={data}>
                        <Line dataKey={"investment"}></Line>
                        <Line dataKey={"sell"}></Line>
                        <Line dataKey={"revenue"}></Line>
                        <XAxis dataKey="month"></XAxis>
                        <Tooltip />
                        <YAxis></YAxis>
                    </LineChart>
                    <h1 className="text-2xl md:text-3xl font-bold">Line Chart</h1>
                </div>
                <div>

                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            dataKey={"investment"}
                            cx="50%"
                            cy="50%"
                            outerRadius={60}
                            fill="#FFA500"
                        />
                        <Pie
                            data={data}
                            dataKey={"sell"}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            fill="#800000"
                            label
                        />
                        <Pie
                            data={data}
                            dataKey={"revenue"}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            fill="#82ca9d"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                    <h1 className="text-2xl md:text-3xl font-bold">Pie Chart</h1>
                </div>


            </div>
            <div class="columns-1 md:columns-2">
                <div>

                    <BarChart width={300} height={300} data={data}>
                        <Bar dataKey={"investment"} fill="#008000" />
                        <Bar dataKey={"revenue"} fill="#FF00FF" />
                        <Bar dataKey={"sell"} fill="#000000" />
                        <XAxis dataKey="month"></XAxis>
                        <Tooltip />
                        <YAxis></YAxis>
                    </BarChart>
                    <h3 className="text-2xl md:text-3xl font-bold">BarChart</h3>
                </div>
                <div>

                    <AreaChart
                        width={400}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey={"investment"} stroke="#800000" fill="#FFA500" />
                        <Area type="monotone" dataKey={"sell"} stroke="#008000" fill="#008000" />
                        <Area type="monotone" dataKey={"revenue"} stroke="#00FF00" fill="#00FF00" />
                        <XAxis ></XAxis>
                        <Tooltip />
                        <YAxis dataKey="month"></YAxis>
                    </AreaChart>
                    <h2 className="text-2xl md:text-3xl font-bold">Area chart</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;