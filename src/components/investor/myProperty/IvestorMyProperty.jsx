import React from "react";
import "./ivMyProp.scss";
import newProp from "../../../assets/images/newProperty.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const IvestorMyProperty = () => {
  return (
    <div>
      <section className="iv-myProp">
        <div className="sect-head">
          <h1>My Property</h1>
        </div>
        <div className="myProp-content">
          <div className="prop-item">
            <div className="left">
              <img src={newProp} alt="" className="img-fluid" />
            </div>
            <div className="right">
              <div className="p-name">
                <h1>Star Sun Hotel & Apartment</h1>
                <p>
                  <span>
                    <Icon
                      icon="material-symbols:location-on"
                      color="black"
                      width="22"
                      height="22"
                    />
                  </span>{" "}
                  North Carolina, USA
                </p>
              </div>
              <div className="p-price">
                <p>
                  <span>$</span>500
                </p>
              </div>

              <div className="p-feature">
                <p>
                  2 <span>guest</span>
                </p>
                |
                <p>
                  2 <span>guest</span>
                </p>
                |
                <p>
                  2 <span>guest</span>
                </p>
              </div>
              <div className="p-btns">
                <a href="#">View Property</a>
                <Link to="/invSaleProrperty">Sell</Link>
              </div>
            </div>
          </div>

          <div className="prop-item">
            <div className="left">
              <img src={newProp} alt="" className="img-fluid" />
            </div>
            <div className="right">
              <div className="p-name">
                <h1>Star Sun Hotel & Apartment</h1>
                <p>
                  <span>
                    <Icon
                      icon="material-symbols:location-on"
                      color="black"
                      width="22"
                      height="22"
                    />
                  </span>{" "}
                  North Carolina, USA
                </p>
              </div>
              <div className="p-price">
                <p>
                  <span>$</span>500
                </p>
              </div>

              <div className="p-feature">
                <p>
                  2 <span>guest</span>
                </p>
                |
                <p>
                  2 <span>guest</span>
                </p>
                |
                <p>
                  2 <span>guest</span>
                </p>
              </div>
              <div className="p-btns">
                <a href="#">View Property</a>
                <a href="#">Sell</a>
              </div>
            </div>
          </div>

          <div className="prop-item">
            <div className="left">
              <img src={newProp} alt="" className="img-fluid" />
            </div>
            <div className="right">
              <div className="p-name">
                <h1>Star Sun Hotel & Apartment</h1>
                <p>
                  <span>
                    <Icon
                      icon="material-symbols:location-on"
                      color="black"
                      width="22"
                      height="22"
                    />
                  </span>{" "}
                  North Carolina, USA
                </p>
              </div>
              <div className="p-price">
                <p>
                  <span>$</span>500
                </p>
              </div>

              <div className="p-feature">
                <p>
                  2 <span>guest</span>
                </p>
                |
                <p>
                  2 <span>guest</span>
                </p>
                |
                <p>
                  2 <span>guest</span>
                </p>
              </div>
              <div className="p-btns">
                <a href="#">View Property</a>
                <a href="#">Sell</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IvestorMyProperty;
