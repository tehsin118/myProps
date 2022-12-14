import { Icon } from "@iconify/react";
import React from "react";
import "./owner.scss";
import { Link } from "react-router-dom";

const Ownership = () => {
  return (
    <div>
      <section className="ownership-admin">
        <div className="section-head">
          <h1>Requests To Change</h1>
        </div>
        <div className="my-table">
          <div className="my-table-head">
            <p className="p1">Owner</p>
            <p className="p2">New owner</p>
            <p className="p3">Property</p>
            <p className="p4">Bonds</p>
            <p className="p5">Price</p>
            <p className="p6">Contract</p>
            <p className="p7"></p>
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
                    <h5>Acc no</h5>
                    <p>2476135690078</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="c2">
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
                    <h5>Acc no</h5>
                    <p>2476135690078</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="c3">
              <p>Bosschestraat 6 The Hague</p>
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
              <a href="#">
                <Icon
                  icon="icomoon-free:attachment"
                  color="#1877f2"
                  width="16"
                  height="16"
                />
              </a>
            </div>
            <div className="c7">
              <Link to="/changeOwner">change</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ownership;
