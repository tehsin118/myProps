import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./asidebarAdmin.scss";
import { Icon } from "@iconify/react";
import weblogo from "../../../assets/images/logo.svg";
import add from "../../../assets/images/add.svg";
import AdminMessage from "../message/AdminMessage";

import DashboardAdmin from "../dashboard/DashboardAdmin";
import Ownership from "../ownership/Ownership";
import AdminAddProperty from "../adminAddProperty/AdminAddProperty";

const AsidebarAdmin = () => {
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
                Add Property
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
                  <NavLink class="nav-link" to="/adminMsg">
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
                  <NavLink class="nav-link" to="/adminProperty">
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
                  <NavLink class="nav-link" to="/ownerShip">
                    <Icon
                      icon="mdi:arrow-left-right-bold"
                      width="20"
                      height="20"
                      className="nav-icon"
                    />
                    Ownership
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink class="nav-link" to="#">
                    <Icon
                      icon="fluent-mdl2:hexadite-investigation-semi-auto"
                      width="20"
                      height="20"
                      className="nav-icon"
                    />
                    Investors
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="other-sction">
        <Routes>
          <Route>
            <Route path="/" element={<DashboardAdmin />} />
            <Route path="/adminMsg" element={<AdminMessage />} />
            <Route path="/adminAddProperty" element={<AdminAddProperty />} />
            <Route path="/ownerShip" element={<Ownership />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
};

export default AsidebarAdmin;
