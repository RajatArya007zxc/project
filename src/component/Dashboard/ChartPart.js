import React from 'react'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,ResponsiveContainer } from 'recharts';
const data = [{name: 'Week 1', uv: 100, pv: 2400, amt: 2400},{name:'Week 2',uv:300,pv:1800,amt:2300},
{name:'Week 3',uv:200,pv:1800,amt:2300},{name:'Week 4',uv:300,pv:1800,amt:2300},{name:'Week 5',uv:450,pv:1800,amt:2300},{name:'Week 6',uv:200,pv:1800,amt:2300}
];

export default function ChartPart() {
    return (
        <div>
            <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
        </div>
    )
}
