import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import "./invSaleProperty.scss";
const InvSaleProrperty = () => {
  return (
    <div>
      <section className="investor-sale-property">
        <div className="go-back">
          <Link to="/ivMyProperty">
            <Icon
              icon="material-symbols:arrow-back-rounded"
              color="black"
              width="20"
              height="24"
              className="me-2"
            />
            Back
          </Link>
        </div>
        <div className="investor-sale-property-content">
          <div className="left-content">
            <div className="publish-form">
              <div>
                <p className="input-lbl">Name</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Charlie Chaplin"
                />
              </div>
              <div>
                <p className="input-lbl">Name</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Charlie Chaplin"
                />
              </div>
              <div>
                <p className="input-lbl">Selling bonds</p>
                <select id="propertyType" className="select-bond">
                  <option value="" disabled selected>
                    Select Bond
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="publish-btn">
              <button>Publish</button>
            </div>
          </div>

          <div className="right-content">
            <div>
              <div className="right-pro">
                <div className="property-img">
                  <h3>Your investment</h3>
                  <img
                    src="\assets\images\op.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="bonds-val">
                  <h1>10 bonds </h1>
                  <span>=</span>
                  <h2>13500</h2>
                </div>
                <div className="total ">
                  <p>Total</p>
                  <h4>
                    <span>
                      <Icon
                        icon="material-symbols:euro-rounded"
                        color="black"
                        width="22"
                        height="22"
                      />
                    </span>
                    1600.8
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvSaleProrperty;
