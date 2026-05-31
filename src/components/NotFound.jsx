import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound_container">
      <div className="notfound_content">
        <div className="notfound_code">404</div>
        <h1 className="notfound_title">Page Not Found</h1>
        <p className="notfound_description">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link to="/" className="notfound_button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
