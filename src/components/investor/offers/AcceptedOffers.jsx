import { Icon } from "@iconify/react";
import React from "react";

const AcceptedOffers = () => {
  return (
    <div>
      <section className="accepted-offers">
        <div className="section-head">
          <h1>Accepted Offers</h1>
        </div>
        <div className="my-table">
          <div className="my-table-head">
            <p className="p1">Owner</p>
            <p className="p2">Account Number</p>
            <p className="p3">Property</p>
            <p className="p4">Bonds</p>
            <p className="p5">Price</p>
            <p className="p6">Accept Offer / Reject Offer</p>
          </div>

          <div className="my-table-content">
            <div className="c1">
              <div className="left">
                <Icon
                  icon="material-symbols:check-circle"
                  color="black"
                  width="78"
                  height="78"
                />
              </div>
              <div className="right">
                <div className="owner-name">
                  <h6>Floyd Miles</h6>
                  <div className="account">
                    <h5>Property Owner</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="c2">
              <div className="right">
                <div className="account">
                  <p>2476135690078</p>
                </div>
              </div>
            </div>
            <div className="c3">
              <a href="#">Open Property</a>
            </div>
            <div className="c4">
              <p>23</p>
            </div>
            <div className="c5">
              <Icon
                icon="material-symbols:euro"
                color="black"
                width="19"
                height="19"
                className="ico"
              />

              <p>1600.8</p>
            </div>

            <div className="c6">
              <a href="#">Open Form</a>
              <a href="#">Continue Payment</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcceptedOffers;
