import React from "react";
import { useSelector } from "react-redux";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { formatDate } from "../../helpers/formatter";

export const Graph = () => {
  const { countryData } = useSelector((state) => state.covidTracker);

  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <BarChart
            width={600}
            height={300}
            data={[
              {
                name: "Infected",
                value: countryData.Confirmed,
                color: "info",
                date: formatDate(countryData.Date),
              },
              {
                name: "Recovered",
                value: countryData.Recovered,
                color: "secondary",
                date: formatDate(countryData),
              },
              {
                name: "Active",
                value: countryData.Active,
                color: "warning",
                date: formatDate(countryData),
              },
              {
                name: "Deaths",
                value: countryData.Deaths,
                color: "danger",
                date: formatDate(countryData),
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
