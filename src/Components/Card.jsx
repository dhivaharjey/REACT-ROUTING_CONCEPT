import React from "react";
import "./styles/Card.css";

const Card = ({ item }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-3 d-flex align-items-stretch">
      <div className="card  mb-5 ">
        <img src={item.img} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bolder fs-3">{item.heading}</h5>
          <p className="card-text text-dark fs-6">{item.description}</p>
        </div>
        <div className="card-footer">
          <p className="card-text">
            <small className="text-body-secondary ">{item.date}</small>
            <small className="text-body-secondary ps-1 ">
              <span> &#8226;</span> No Comments
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
