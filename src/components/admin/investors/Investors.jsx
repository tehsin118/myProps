import React from "react";
import "./investor.scss";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const Investors = () => {
  return (
    <div>
      <section className="investors">
        <div className="section-head">
          <h1>All Investors</h1>
        </div>
        <div className="my-table">
          <div className="my-table-head">
            <p className="p1">Investor Name</p>
            <p className="p1">Phone Number</p>
            <p className="p1">Email</p>
            <p className="p1">Investment</p>
            <p className="p1">Location</p>
            <p className="p1">Status</p>
          </div>

          <div>
            <div className="my-table-content">
              <div className="c1">
                <div className="owner-name">
                  <h6>Floyd Miles</h6>
                </div>
              </div>

              <div className="c1">
                <h6>(225) 555-0118</h6>
              </div>

              <div className="c1">
                <h6>jane@microsoft.com</h6>
              </div>

              <div className="c1 invest">
                <Icon
                  icon="material-symbols:euro"
                  color="black"
                  width="19"
                  height="19"
                  className="ico"
                />

                <p>1600.8</p>
                <span> / </span>
                <p>15 bonds</p>
              </div>
              <div className="c1">
                <h6>United States</h6>
              </div>

              <div className="c1 status">
                <h5 className="pending-percent">50%</h5>
                <h6 className="status-title">Payment Pending</h6>
              </div>
            </div>

            <div className="my-table-content">
              <div className="c1">
                <div className="owner-name">
                  <h6>Floyd Miles</h6>
                </div>
              </div>

              <div className="c1">
                <h6>(225) 555-0118</h6>
              </div>

              <div className="c1">
                <h6>jane@microsoft.com</h6>
              </div>

              <div className="c1 invest">
                <Icon
                  icon="material-symbols:euro"
                  color="black"
                  width="19"
                  height="19"
                  className="ico"
                />

                <p>1600.8</p>
                <span> / </span>
                <p>15 bonds</p>
              </div>
              <div className="c1">
                <h6>United States</h6>
              </div>

              <div className="c1 status">
                <h6 className="status-title-updt">Update Payment</h6>
              </div>
            </div>

            <div className="my-table-content">
              <div className="c1">
                <div className="owner-name">
                  <h6>Floyd Miles</h6>
                </div>
              </div>

              <div className="c1">
                <h6>(225) 555-0118</h6>
              </div>

              <div className="c1">
                <h6>jane@microsoft.com</h6>
              </div>

              <div className="c1 invest">
                <Icon
                  icon="material-symbols:euro"
                  color="black"
                  width="19"
                  height="19"
                  className="ico"
                />

                <p>1600.8</p>
                <span> / </span>
                <p>15 bonds</p>
              </div>
              <div className="c1">
                <h6>United States</h6>
              </div>

              <div className="c1 status">
                <h6 className="status-title-approve">Payment Approved</h6>
              </div>
            </div>

            <div className="my-table-content">
              <div className="c1">
                <div className="owner-name">
                  <h6>Floyd Miles</h6>
                </div>
              </div>

              <div className="c1">
                <h6>(225) 555-0118</h6>
              </div>

              <div className="c1">
                <h6>jane@microsoft.com</h6>
              </div>

              <div className="c1 invest">
                <Icon
                  icon="material-symbols:euro"
                  color="black"
                  width="19"
                  height="19"
                  className="ico"
                />

                <p>1600.8</p>
                <span> / </span>
                <p>15 bonds</p>
              </div>
              <div className="c1">
                <h6>United States</h6>
              </div>

              <div className="c1 status">
                <h6 className="status-approval-pending">
                  Payment Approval Pending
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;
