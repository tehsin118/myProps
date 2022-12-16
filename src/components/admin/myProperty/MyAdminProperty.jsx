import React from "react";
import "./myAdminProperty.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import sh from "../../../assets/images/properties/search.png";
import notifi from "../../../assets/images/properties/notification.svg";
import profile from "../../../assets/images/properties/profile.svg";
import property1 from "../../../assets/images/properties/property1.png";
import property2 from "../../../assets/images/properties/property2.png";
import property3 from "../../../assets/images/properties/property3.png";
import property4 from "../../../assets/images/properties/property4.png";
import property5 from "../../../assets/images/properties/property5.png";
import property6 from "../../../assets/images/properties/property6.png";
import property7 from "../../../assets/images/properties/property7.png";
import property8 from "../../../assets/images/properties/property8.png";

const MyAdminProperty = () => {
  const navigateAdminProperty = () => {
    // 👇️ navigate to /contacts
    // navigate("/adminMsg");
    alert("dsa");
  };
  return (
    <div>
      <section className="admin-property">
        <div className="properties-nav">
          <div className="left">
            <img src={sh} alt="..." className="img-fluid" />
            <input
              type="text"
              placeholder="Search Property, Customer, Investors etc"
            />
          </div>
          <div className="right">
            <a href="#">
              {" "}
              <img src={notifi} alt="..." className="img-fluid notify" />
            </a>
            <img src={profile} alt="..." className="img-fluid profile" />
            <div>
              <h6>Hawkins Maru</h6>
              <p>Company Manager</p>
            </div>
          </div>
        </div>

        <div className="properties-content">
          <h1>All Properties</h1>
          <div className="properties-cards">
            <div className="property-card" onClick={navigateAdminProperty}>
              <img src={property1} alt="..." className="img-fluid" />
              <div className="row">
                <div className="col-7">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className="col-5 card-right">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <img src={property2} alt="..." className="img-fluid" />
              <div className="row">
                <div className="col-7">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className="col-5 card-right">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <img src={property3} alt="..." className="img-fluid" />
              <div className="row">
                <div className="col-7">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className="col-5 card-right">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <img src={property4} alt="..." className="img-fluid" />
              <div className="row">
                <div className="col-7">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className="col-5 card-right">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <img src={property5} alt="..." className="img-fluid" />
              <div className="row">
                <div className="col-7">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className="col-5 card-right">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <img src={property6} alt="..." className="img-fluid" />
              <div className="row">
                <div className="col-7">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className="col-5 card-right">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <img src={property7} alt="..." className="img-fluid" />
              <div className="row">
                <div className="col-7">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className="col-5 card-right">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
            </div>
            <div className="property-card">
              <img src={property8} alt="..." className="img-fluid" />
              <div className="row">
                <div className="col-7">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className="col-5 card-right">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAdminProperty;
