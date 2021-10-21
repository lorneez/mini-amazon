import React, {useState} from "react"
import { PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import SideBarComponent from "../../components/SideBarComponent"

const data_pie = [
    { name: 'To be shipped', value: 400 },
    { name: 'To be delivered', value: 300 }
];

const COLORS = ['#0088FE', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {data_pie[index].name}
        </text>
    );
};

const data = [
    {
        name: 'Monday',
        Current: 4000,
        Past: 2400,
    },
    {
        name: 'Tuesday',
        Current: 3000,
        Past: 1398,
    },
    {
        name: 'Wednesday',
        Current: 2000,
        Past: 9800,
    },
    {
        name: 'Thursday',
        Current: 2780,
        Past: 3908,
    },
    {
        name: 'Friday',
        Current: 1890,
        Past: 4800,
    },
    {
        name: 'Saturday',
        Current: 2390,
        Past: 3800,
    },
    {
        name: 'Sunday',
        Current: 3490,
        Past: 4300,
    },
];


function SellerDashboard() {

    const formatYAxis = (tickItem) => {
        return "$" + tickItem;
    }

    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"seller"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"} >
                        <div className={"p-6"} style={{width: 600, height: 300}}>
                            <div style={{height: "100%", width: "100%"}}>
                                <h1 className="title">Weekly Statistics</h1>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={300}
                                        height={150}
                                        data={data}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name"/>
                                        <YAxis tickFormatter={formatYAxis}/>
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="Current" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="Past" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className={"p-6"} style={{width: 600, height: 300}}>
                            <div style={{height: "100%", width: "100%"}}>
                                <h1 className="title">Product Orders</h1>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart width={150} height={150}>
                                        <Pie
                                            data={data_pie}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            outerRadius={100}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {data_pie.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerDashboard;