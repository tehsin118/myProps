import React from "react";
import "./owner.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const ChangeOwnership = () => {
  return (
    <div>
      <section className="change-ownership">
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
        <div className="owner-change">
          <div className="left">
            <div className="left-owner">
              <div className="owner-head">
                <h1>Previous owner details</h1>
              </div>

              <div className="input-lable">
                <p>Name</p>
                <input type="text" />
              </div>

              <div className="input-lable">
                <p>Email</p>
                <input type="email" />
              </div>

              <div className="input-lable">
                <p>Total Investment</p>
                <input type="number" />
              </div>

              <div className="input-lable lb1">
                <p>Phone Number</p>
                <div className="d-flex justify-content-between ">
                  <input type="number" className="number-input1" />
                  <input
                    type="number"
                    className="number-input"
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className="input-lable">
                <p>Account Number</p>
                <input type="number" />
              </div>
            </div>
            <div className="right-owner">
              <div className="owner-head">
                <h1>New owner details</h1>
              </div>

              <div className="input-lable">
                <p>Name</p>
                <input type="text" />
              </div>

              <div className="input-lable">
                <p>Email</p>
                <input type="email" />
              </div>

              <div className="input-lable">
                <p>Total Investment</p>
                <input type="number" />
              </div>

              <div className="input-lable lb1">
                <p>Phone Number</p>
                <div className="d-flex justify-content-between ">
                  <input type="number" className="number-input1" />
                  <input
                    type="number"
                    className="number-input"
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className="input-lable">
                <p>Account Number</p>
                <input type="number" />
              </div>

              <div className="transfer">
                <button>Transfer Ownership</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <div className="right-pro">
                <div className="property-img">
                  <img
                    src="\assets\images\op.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h1>Bosschestraat 6 the hague</h1>
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

export default ChangeOwnership;
