import { Icon } from "@iconify/react";
import React from "react";
import "./adminProperty.scss";
import sellProp from "../../../assets/images/sell.svg";
const AdminProperty = () => {
  return (
    <div>
      <section className="admin-add-property">
        <div className="admin-add-property-content">
          <div className="left-content">
            <p className="tag">+ Add Property</p>

            <div className="property-radio-btn">
              <img src={sellProp} alt="" />
            </div>
            <div className="input-lable">
              <h6>Upload image of your property</h6>
            </div>

            <div className="img-upload">
              <Icon
                icon="ph:image-bold"
                color="#4879f5"
                width="170"
                height="170"
              />
              <input type="file" />
            </div>

            <div className="input-lable">
              <h5>Property Type</h5>
            </div>
            <div className="property-type-tabs mt-4">
              <img src={sellProp} alt="" />
            </div>

            <div className="input-lable">
              <h5>
                <span>1)</span> Property Type
              </h5>
            </div>
          </div>
          <div className="right-content">
            <h1>hh</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminProperty;
