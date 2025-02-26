// src/components/Card.js
import React from "react";
import PropTypes from "prop-types";

const Card = ({ header, body, footer }) => {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
};

Card.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
};

export default Card;
