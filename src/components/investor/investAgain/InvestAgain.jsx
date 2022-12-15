import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import "./invest-again.scss";
const InvestAgain = () => {
  return (
    <div>
      <section className="invest-again">
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
        <div className="invest-again-content">
          <div className="l-content">
            <div className="s-node">
              <p>Select the number of bonds</p>
              <h1>
                <span>Minimum 1 bond</span>
                <span>Maximum 106 bond</span>
              </h1>
            </div>

            <div className="bond-select-card">
              <div className="price-bond">
                <h4>
                  <span>
                    <Icon
                      icon="material-symbols:euro-rounded"
                      color="#fff"
                      width="23"
                      height="23"
                    />
                  </span>
                  1600.8
                </h4>
                <p>Per Bond</p>
              </div>

              <div className="bond-select-btn">
                <div className="b1">
                  <label>
                    <input type="radio" name="bond" id="" value="" />
                    <p>1 Bond</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bond" id="" value="" />
                    <p>2 Bond</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bond" id="" value="" />
                    <p>5 Bond</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bond" id="" value="" />
                    <p>10 Bond</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bond" id="" value="" />
                    <p>20 Bond</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bond" id="" value="" />
                    <p>50 Bond</p>
                  </label>
                </div>
              </div>

              <div className="incremental">
                <h5>
                  <span className="inc">-</span>
                  <span>
                    <input type="text" disabled value="5" />
                  </span>
                  <span className="dec">+</span>
                </h5>
              </div>
            </div>
            <div className="continue">
              <button>Continue</button>
            </div>
          </div>

          <div className="r-content">
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

export default InvestAgain;
