import React from "react";
import { Cell } from "../Cell";

export const Row = ({ rowInfo }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      {rowInfo.map((cellData, idx) => (
        <Cell key={idx} cellData={cellData} />
      ))}
    </div>
  );
};
