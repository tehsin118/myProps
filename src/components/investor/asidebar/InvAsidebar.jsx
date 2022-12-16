import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./invAsidebar.scss";
import { Icon } from "@iconify/react";
// import weblogo from "../../../assets/images/logo.svg";
import weblogo from "../../../assets/images/logo.svg";
import add from "../../../assets/images/add.svg";
import InvDashboard from "../dashboard/InvDashboard";
import IvMessage from "../message/IvMessage";

import IvestorMyProperty from "../myProperty/IvestorMyProperty";
import InvSaleProrperty from "../saleProperty/InvSaleProrperty";
import InvestAgain from "../investAgain/InvestAgain";
import PaymentInfo from "../paymentInfo/PaymentInfo";

const InvAsidebar = () => {
  return (
    <div className="d-flex">
      <section className="admin-asidebar">
        <div className="asidebar-content">
          <div className="logo">
            <img src={weblogo} alt="logo here" className="img-fluid" />
          </div>
          <div className="admin-navbar">
            <div className="add-property ">
              <NavLink to="/adminAddProperty">
                <img src={add} alt="" className="img-fluid" />
                Invest Now
              </NavLink>
            </div>
            <nav class="navbar">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    <Icon
                      icon="material-symbols:grid-view-outline-rounded"
                      //   color="black"
                      width="20"
                      height="20"
                      className="nav-icon"
                    />
                    Dashboard
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/ivMsg">
                    <Icon
                      icon="tabler:message"
                      width="20"
                      height="20"
                      className="nav-icon"
                    />
                    Messages
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink class="nav-link" to="/ivMyProperty">
                    <Icon
                      icon="bi:house-check-fill"
                      width="20"
                      height="20"
                      className="nav-icon"
                    />
                    My Property
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink class="nav-link" to="/investAgain">
                    <Icon
                      icon="uil:tag-alt"
                      width="20"
                      height="20"
                      className="nav-icon"
                    />
                    My Selling
                  </NavLink>
                </li>

                {/* <li class="nav-item">
                  <NavLink class="nav-link" to="/investors">
                    <Icon
                      icon="fluent-mdl2:hexadite-investigation-semi-auto"
                      width="20"
                      height="20"
                      className="nav-icon"
                    />
                    Investors
                  </NavLink>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="other-sction">
        <Routes>
          <Route>
            <Route path="/" element={<InvDashboard />} />
            <Route path="/ivMsg" element={<IvMessage />} />
            <Route path="/ivMyProperty" element={<IvestorMyProperty />} />
            <Route path="/invSaleProrperty" element={<InvSaleProrperty />} />
            <Route path="/investAgain" element={<InvestAgain />} />
            <Route path="/payInfo" element={<PaymentInfo />} />
            {/* <Route path="/ownerShip" element={<Ownership />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/changeOwner" element={<ChangeOwnership />} /> */}
          </Route>
        </Routes>
      </section>
    </div>
  );
};

export default InvAsidebar;
