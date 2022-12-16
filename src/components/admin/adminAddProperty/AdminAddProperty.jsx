import { Icon } from "@iconify/react";
import React from "react";
import "./adminAddProperty.scss";
import sellProp from "../../../assets/images/sell.svg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const AdminAddProperty = () => {
  return (
    <div>
      <section className="admin-add-property">
        <div className="admin-add-property-content">
          <div className="left-content">
            <p className="tag">+ Add Property</p>

            {/* Property sell buy radio */}
            <div className="property-radio-btn">
              <div className="b1">
                <label>
                  <input type="radio" name="t-residence" id="" value="" />
                  <Icon
                    icon="cil:house"
                    color="black"
                    width="75"
                    height="75"
                    className="ico"
                  />
                  <p>Sell</p>
                </label>
              </div>

              <div className="b1">
                <label>
                  <input type="radio" name="t-residence" id="" value="" />
                  <Icon
                    icon="cil:house"
                    color="black"
                    width="75"
                    height="75"
                    className="ico"
                  />
                  <p>Sell</p>
                </label>
              </div>
            </div>

            {/* Upload Img */}

            <div>
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
            </div>

            {/* Property Type Tabs */}
            <div>
              <div className="input-lable">
                <h5>Property Type</h5>
              </div>
              <div className="prop-type-tabs">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      <Icon
                        icon="ph:house-bold"
                        color="#f7b03e"
                        width="32"
                        height="32"
                        className="ico"
                      />
                      <p>Residential</p>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      <Icon
                        icon="mdi:office-building"
                        color="#f7b03e"
                        width="32"
                        height="32"
                        className="ico"
                      />
                      <p>Commercial</p>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="contact-tab-pane"
                      aria-selected="false"
                    >
                      <Icon
                        icon="mdi:sign-real-estate"
                        color="#f7b03e"
                        width="32"
                        height="32"
                        className="ico"
                      />
                      <p>Plot</p>
                    </button>
                  </li>
                </ul>

                <div class="tab-content d-flex" id="myTabContent">
                  <div
                    class="tab-pane fade show active "
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0"
                  >
                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>House</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Flat</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Room</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Apartment</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Upper Portion</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Lower Portion</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Pent House</p>
                      </label>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="1"
                  >
                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Office</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Shop</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Factory</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Building</p>
                      </label>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabindex="2"
                  >
                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Residential</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Commercial</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Industrial</p>
                      </label>
                    </div>

                    <div className="b1">
                      <label>
                        <input type="radio" name="s-residence" id="" value="" />
                        <p>Agricultural</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Type Select */}
            <div>
              <div className="input-lable1">
                <h5>
                  <span>1)</span> Property Type
                </h5>
              </div>

              <select id="propertyType" className="select-prop-type">
                <option value="" disabled selected>
                  Select City
                </option>
                <option value="lahore">Lahore</option>
                <option value="Rawalpindi">RWP</option>
                <option value="isb">Isb</option>
              </select>
            </div>

            {/* Address */}
            <div>
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
            </div>
            {/* Property Size */}
            <div>
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
                <button disabled>Marla</button>
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="input-lable1">
                <h5>
                  <span>4)</span> Price
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
              <div className="bonds-radio-btn">
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
            </div>
            {/* Bedroom */}
            <div>
              <div className="input-lable1">
                <h5>
                  <span>5)</span> Bedroom
                </h5>
              </div>

              <div className="bedroom-radio-btn d-flex">
                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>Studio</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>1</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>2</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>3</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>4</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>5</p>
                  </label>
                </div>
                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>6</p>
                  </label>
                </div>
                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>7</p>
                  </label>
                </div>
                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>8</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>9</p>
                  </label>
                </div>
                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>10</p>
                  </label>
                </div>

                <div className="b1">
                  <label>
                    <input type="radio" name="bedroom" id="" value="" />
                    <p>10+</p>
                  </label>
                </div>
              </div>
            </div>

            {/* Bathroom */}

            <div className="input-lable1">
              <h5>
                <span>6)</span> Bathroom
              </h5>
            </div>

            <div className="bathroom-radio-btn d-flex">
              <div className="b1">
                <label>
                  <input type="radio" name="a-bath" id="" value="" />
                  <p>1</p>
                </label>
              </div>

              <div className="b1">
                <label>
                  <input type="radio" name="a-bath" id="" value="" />
                  <p>2</p>
                </label>
              </div>

              <div className="b1">
                <label>
                  <input type="radio" name="a-bath" id="" value="" />
                  <p>3</p>
                </label>
              </div>

              <div className="b1">
                <label>
                  <input type="radio" name="a-bath" id="" value="" />
                  <p>4</p>
                </label>
              </div>

              <div className="b1">
                <label>
                  <input type="radio" name="a-bath" id="" value="" />
                  <p>5</p>
                </label>
              </div>

              <div className="b1">
                <label>
                  <input type="radio" name="a-bath" id="" value="" />
                  <p>6</p>
                </label>
              </div>

              <div className="b1">
                <label>
                  <input type="radio" name="a-bath" id="" value="" />
                  <p>7</p>
                </label>
              </div>
            </div>

            {/* Title */}
            <div>
              <div className="input-lable1">
                <h5>
                  <span>7)</span> Title
                </h5>
              </div>
              <input
                type="text"
                placeholder="Enter property title"
                className="property-detail-input"
              />
            </div>

            {/* Description */}
            <div className="description">
              <div className="input-lable1">
                <h5>Description</h5>
              </div>
              <textarea
                type="text"
                placeholder="Describe your property features"
                className="property-detail-input"
              />
            </div>

            {/* Contact Information */}
            <div className="contact-information">
              <div className="input-lable1">
                <h5>Contact Information</h5>
              </div>
              <div className="ci-content">
                <div className="ci-form">
                  <div className="input-lable1">
                    <h4>Email</h4>
                  </div>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="property-detail-input"
                  />

                  <div className="input-lable1">
                    <h4>Mobile</h4>
                  </div>
                  <input
                    type="number"
                    placeholder="Enter Mobile Number"
                    className="property-detail-input"
                  />
                </div>
              </div>
            </div>

            <button className="add-prop">Add Property</button>
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
