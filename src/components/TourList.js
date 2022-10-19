import React from "react";
import { Link } from "react-router-dom";

const TourList = () => {
  return (
    <div className="tourlist_container">
      <ul className="list">
        <li className="list__li">
          <Link className="list__link" to="/outgoing">
            Outgoing
          </Link>
        </li>
        <li className="list__li">
          <Link className="list__link" to="/incoming">
            Incoming
          </Link>
        </li>
        <li className="list__li">
          <Link className="list__link" to="/dailytours">
            Daily Tours 
          </Link>
        </li>
      
        <li className="list__li">
          <Link className="list__link" to="/mostwanted">
            Most Wanted
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TourList;
