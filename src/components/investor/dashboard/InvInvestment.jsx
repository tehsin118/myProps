import React from "react";
// import "./adminDash.scss";
import newProp from "../../../assets/images/newProperty.png";
import { Icon } from "@iconify/react";
const InvInvestment = () => {
  return (
    <div>
      <section className="admin-dashoard">
        <div className="admin-dashboard-content">
          <div className="newly-invested-properties">
            <div className="section-headings">
              <h1>My Investments</h1>
            </div>

            <div className="new-props-card">
              <div className="header">
                <img src={newProp} alt="" />
              </div>
              <div className="details">
                <div className="left-d">
                  <h1>Star Sun Hotel & Apartment</h1>

                  <p>
                    <span className="me-2">
                      <Icon
                        icon="material-symbols:location-on"
                        color="black"
                        width="18"
                        height="18"
                      />
                    </span>
                    North Carolina, USA
                  </p>
                </div>
                <div className="right-d">
                  <h6 className="currency">
                    <span>$</span>
                    500
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvInvestment;
