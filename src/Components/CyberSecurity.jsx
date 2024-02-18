import React from "react";
import Card from "./Card";

const CyberSecurity = ({ cyberSecurity }) => {
  return (
    <>
      {cyberSecurity.map((item) => {
        return <Card item={item} />;
      })}
    </>
  );
};

export default CyberSecurity;
