import React, {useContext, useEffect, useState} from "react"
import { PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import {AuthContext} from "../../contexts/AuthContext";

import SideBarComponent from "../../components/SideBarComponent"
import axios from "axios";

let data_pie = [
    { name: 'To be shipped', value: 0 },
    { name: 'To be delivered', value: 0 }
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

];


function SellerDashboard() {

    const auth = useContext(AuthContext);
    const { state } = auth;
    const { userId } = state;

    const formatYAxis = (tickItem) => {
        return "$" + tickItem;
    }

    const [shipped, setShipped] = useState(0);
    const [notShipped, setNotShipped] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        // const result = await axios(
        //     'http://localhost:5000/api/all_seller_orders/?seller_id=' + userId, {
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //         },
        //     }
        // );
        const result = await axios(
            'http://localhost:5000/api/all_seller_orders/?seller_id=0', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
        console.log(result)
        let temp1 = 0
        let temp2 = 0
        let graphData = {}
        for (var i = 0; i < result.data.length; i++) {
            let time = result.data[i].order_time.split(" ")[0]
            if (time in graphData) {
                graphData[time] += result.data[i].order_quantity * result.data[i].product_price;
            }
            else {
                graphData[time] = result.data[i].order_quantity * result.data[i].product_price;
            }
            if(result.data[i].order_fulfill) {
                temp1 += 1
            }
            else {
                temp2 += 1
            }
        }
        // graphData["2020-11-9"] = 10000
        // graphData["2020-11-11"] = 20000
        const orderedGraphData = {}
        Object.keys(graphData).sort(function(a, b) {
            return moment(a, 'YYYY-MM-DD').toDate() - moment(b, 'YYYY-MM-DD').toDate();
        }).forEach(function(key) {
            orderedGraphData[key] = graphData[key];
        })
        let totalProfit = 0;
        for (let [key, value] of Object.entries(orderedGraphData)) {
            totalProfit += value
            let tempDataObject = {
                Daily: value,
                Total: totalProfit,
                name: key
            }
            data.push(tempDataObject)
        }
        setShipped(temp1)
        setNotShipped(temp2)
        data_pie[0].value = temp2
        data_pie[1].value = temp1
        setLoading(false);
    }, []);

    function renderGraphs() {
        if(loading) {
            return (
                <div>
                    Loading
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className={"p-6 mt-5"} style={{width: 600, height: 400, borderRadius: "5px", borderWidth: "2px", borderStyle: "solid"}}>
                        <div style={{height: "100%", width: "100%"}}>
                            <h1 className="title">Profit Statistics</h1>
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
                                    <Line type="monotone" dataKey="Daily" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="Total" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className={"p-6 mt-5"} style={{width: 600, height: 400, borderRadius: "5px", borderWidth: "2px", borderStyle: "solid"}}>
                        <div style={{height: "100%", width: "100%"}}>
                            <h1 className="title">Current Order Status</h1>
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
            )
        }
    }

    return (
        <div>
            <div className={"columns"}>
                <div className={"column is-one-fifth"}>
                    <SideBarComponent type={"seller"}/>
                </div>
                <div className={"column"}>
                    <div className={"container"} >
                        {renderGraphs()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerDashboard;