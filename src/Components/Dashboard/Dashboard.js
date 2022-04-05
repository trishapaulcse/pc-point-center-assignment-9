import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { PieChart, Pie, } from "recharts";


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

        </div>
    );
};

export default Dashboard;
