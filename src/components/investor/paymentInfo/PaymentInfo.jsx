import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import "./payinfo.scss";
const PaymentInfo = () => {
  return (
    <div>
      <section className="payment-info">
        <div className="go-back">
          <Link to="/ownerShip">
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
                <input type="text" name="" id="" placeholder="First Name" />
              </div>
              <div>
                <input type="text" name="" id="" placeholder="Last Name" />
              </div>
              <div>
                <input type="email" name="" id="" placeholder="Email" />
              </div>

              <div className="phon">
                <input type="number" name="" id="" placeholder="+91" />
                <input type="number" name="" id="" placeholder="Phone Number" />
              </div>

              <div>
                <input type="date" name="" id="" placeholder="Date" />
              </div>

              <div>
                <select id="propertyType" className="select-bond">
                  <option value="" disabled selected>
                    Country
                  </option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="3">USA</option>
                  <option value="4">UK</option>
                  <option value="5">India</option>
                </select>
              </div>

              <div>
                <select id="propertyType" className="select-bond">
                  <option value="" disabled selected>
                    City
                  </option>
                  <option value="2">Lahore</option>
                  <option value="3">Rawalpindi</option>
                  <option value="4">Karachi</option>
                </select>
              </div>

              <div>
                <input type="text" name="" id="" placeholder="Address" />
              </div>
            </div>
            <div className="payment-method">
              <div className="sect-head">
                <h1>Payment Method</h1>
              </div>

              <div className="select-payment-method">
                <div className="b1">
                  <label>
                    <input type="radio" name="t-residence" id="" value="" />

                    <img src="\assets\images\stripe.svg" alt="" />
                  </label>
                </div>
                <div className="b1">
                  <label>
                    <input type="radio" name="t-residence" id="" value="" />

                    <img src="\assets\images\mollie.svg" alt="" />
                  </label>
                </div>
              </div>

              <div className="publish-btn">
                <button>Process payment</button>
              </div>
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

export default PaymentInfo;
