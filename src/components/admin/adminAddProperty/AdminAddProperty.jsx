import { Icon } from "@iconify/react";
import React from "react";
import "./adminAddProperty.scss";
import sellProp from "../../../assets/images/sell.svg";
const AdminAddProperty = () => {
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
            <div className="input-lable1">
              <h5>
                <span>1)</span> Property Type
              </h5>
            </div>
            <select id="cars" className="select-prop-type">
              <option value="none" disabled>
                Select City
              </option>
              <option value="saab">Saab</option>
              <option value="vw">VW</option>
              <option value="audi">Audi</option>
            </select>
            <div className="input-lable1">
              <h5>
                <span>2)</span> Address
              </h5>
            </div>
            <input
              type="text"
              placeholder="enter location"
              className="property-detail-input"
            />
            <div className="input-lable1">
              <h5>
                <span>3)</span> Property Size
              </h5>
            </div>
            <div className="d-flex prop-size">
              <input
                type="number"
                placeholder="enter size"
                className="property-detail-input"
              />
              <button>Marla</button>
            </div>
            <div className="input-lable1">
              <h5>
                <span>3)</span> Price
              </h5>

              <h2>
                <span>
                  <Icon
                    icon="material-symbols:euro"
                    color="black"
                    width="20"
                    height="20"
                  />
                </span>
                100
                <span className="per-bond">Per bond</span>
              </h2>
            </div>
            <input
              type="number"
              placeholder="enter price"
              className="property-detail-input"
            />
            <div>
              <label for="bond" className="price-bond-number">
                1 <span>bond</span>
              </label>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
                className="radio-btns"
              />
               
            </div>
          </div>

          <div className="right-content">
            <div className="property-img">
              <img
                src="\assets\images\addP1.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="added-property-details">
              <div className="property-name">
                <div className="left">
                  <h1>Bosschestraat 6 The Hague</h1>
                  <p>Manchester</p>
                </div>
                <div className="right">
                  <h1>
                    <span>$</span> 1500
                  </h1>
                </div>
              </div>
              <div className="property-detail">
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tempor risus ipsum
                  nunc massa eget quis proin urna ultricies. At a nibh
                  vestibulum ipsum massa sed sit viverra suspendisse. Elementum
                  amet sem rutrum leo bibendum. Hendrerit turpis lacus consequat
                  posuere.
                </p>
              </div>
              <div className="property-features">
                <h3>Features</h3>

                <div className="row">
                  <div className="col-4">
                    <p>
                      <span>
                        <Icon
                          icon="material-symbols:bed-outline"
                          color="black"
                          width="32"
                          height="32"
                          className="f-ico"
                        />
                        1<span> Bedroom</span>
                      </span>
                    </p>
                  </div>

                  <div className="col-4">
                    <p>
                      <span>
                        <Icon
                          icon="bx:bath"
                          color="black"
                          width="32"
                          height="32"
                          className="f-ico"
                        />
                        1<span> Bathroom</span>
                      </span>
                    </p>
                  </div>

                  <div className="col-4">
                    <p>
                      <span>
                        <Icon
                          icon="ic:outline-table-restaurant"
                          color="black"
                          width="32"
                          height="32"
                          className="f-ico"
                        />
                        1<span> Dining</span>
                      </span>
                    </p>
                  </div>

                  <div className="col-4">
                    <p>
                      <span>
                        <Icon
                          icon="mdi:kitchen-counter-outline"
                          color="black"
                          width="32"
                          height="32"
                          className="f-ico"
                        />
                        1<span> Kitchen</span>
                      </span>
                    </p>
                  </div>

                  <div className="col-4">
                    <p>
                      <span>
                        <Icon
                          icon="material-symbols:directions-car"
                          color="black"
                          width="32"
                          height="32"
                          className="f-ico"
                        />
                        1<span> Parking</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminAddProperty;
