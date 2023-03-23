import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Graph = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <BarChart
            width={600}
            height={300}
            data={[
              {
                name: "Infected",
                value: 100,
                color: "info",
                date: new Date(),
              },
              {
                name: "Recovered",
                value: 99,
                color: "secondary",
                date: new Date(),
              },
              {
                name: "Active",
                value: 78,
                color: "warning",
                date: new Date(44444),
              },
              {
                name: "Deaths",
                value: 23,
                color: "danger",
                date: new Date(44),
              },
            ]}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#7F0FFF" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};
