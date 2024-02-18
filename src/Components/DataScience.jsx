import React from "react";
import Card from "./Card";

const DataScience = ({ dataScience }) => {
  return (
    <>
      {dataScience.map((item, index) => {
        return (
          <>
            <Card item={item} />
          </>
        );
      })}
    </>
  );
};

export default DataScience;
