import React from "react";
import "./Admin_property_detail.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import apd_main from "../../../assets/images/Apd/apd_main.png";
import Invertor1 from "../../../assets/images/Investors/Investor1.svg";
import Invertor2 from "../../../assets/images/Investors/Investor2.svg";
import Invertor3 from "../../../assets/images/Investors/Investor3.svg";
import property1 from "../../../assets/images/properties/property1.png";
import property2 from "../../../assets/images/properties/property2.png";
import property3 from "../../../assets/images/properties/property3.png";

function PropertyDetail() {
  return (
    <section className="adminpropertydetail_sec">
      <div className="apd-main">
        <div className="apd-left">
          <div className="apd-left-tags">
            <Link to="/adminProperty" className="left-anchor">
              <Icon
                icon="material-symbols:arrow-back-rounded"
                width="20"
                height="24"
                className="tag-icon1"
              />
              Back
            </Link>
            <Link to="/adminAddProperty" className="right-anchor">
              Edit
              <Icon
                icon="material-symbols:edit"
                color="#f7b03e"
                className="tag-icon2"
              />
            </Link>
          </div>
          <div>
            <div className="apd_main_img">
              <img src={apd_main} alt="..." className="img-fluid" />
            </div>
            <div className="apd_card_detail">
              <div className="row head">
                <div className="col-8 ">
                  <div className="apd_card_detail_left">
                    <h4>Bosschestraat 6 The Hague</h4>
                    <h5>Manchester</h5>
                  </div>
                </div>
                <div className="col-4 ">
                  <div className="apd_card_detail_right">
                    <div className="bonds">
                      <h6>100 bonds</h6>
                    </div>

                    <div className="euro">
                      <span>€</span>
                      <p>13,500</p>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="heading">Description</h1>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur. Mauris at ut sed felis
                tortor ut. Pretium convallis quis dignissim quam neque aliquet.
                Tellus diam nibh in lectus lectus ac purus nam. Id eleifend
                tortor integer nunc elit diam eleifend platea. Dictum nibh
                tellus sollicitudin nec mauris. Enim dui est eu lorem.
                Consectetur volutpat purus dignissim egestas et interdum. Ut
                lectus vulputate nulla viverra feugiat fusce morbi aliquet.
                Laoreet neque eget arcu eget ridiculus at. Velit nisi enim
                tellus amet vestibulum. Pellentesque odio diam sed vitae sed
                nunc. Id amet neque dignissim parturient urna lorem.
              </p>
              <h1 className="heading-2">Features</h1>

              <div className="features-detail">
                <div className="top">
                  <div>
                    <span>
                      <Icon
                        icon="material-symbols:bed-outline"
                        color="black"
                        width="33"
                        height="33"
                      />
                    </span>
                    <p>1 Bedroom</p>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="bx:bath"
                        color="black"
                        width="33"
                        height="33"
                      />
                    </span>
                    <p>1 Bathroom</p>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="material-symbols:table-restaurant-outline"
                        color="black"
                        width="33"
                        height="33"
                      />
                    </span>
                    <p>Dining</p>
                  </div>
                </div>
                <div className="bottom">
                  <div>
                    <span>
                      <Icon
                        icon="mdi:kitchen-counter-outline"
                        color="black"
                        width="33"
                        height="33"
                      />
                    </span>
                    <p>Kitchen</p>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="material-symbols:directions-car"
                        color="black"
                        width="33"
                        height="33"
                      />
                    </span>
                    <p>Parking</p>
                  </div>
                </div>
              </div>

              <div className="investors-div">
                <h1 className="heading-3">Investors</h1>
                <div className="all">
                  <span>
                    <Icon
                      icon="vscode-icons:file-type-excel"
                      width="33"
                      height="33"
                    />
                  </span>
                  <a href="#"> View Investors</a>
                </div>
              </div>
              <div className="investors-detail">
                <div className="investor-det">
                  <img src={Invertor1} alt="... " className="img-fluid" />
                  <div>
                    <h3>Jane Cooper</h3>
                    <h6>Property Investor</h6>
                  </div>
                </div>
                <div className="investor-det">
                  <img src={Invertor2} alt="... " className="img-fluid" />
                  <div>
                    <h3>Floyd Miles</h3>
                    <h6>Property Investor</h6>
                  </div>
                </div>
                <div className="investor-det">
                  <img src={Invertor3} alt="... " className="img-fluid" />
                  <div>
                    <h3>Jacob Jones</h3>
                    <h6>Property Investor</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="apd-right">
          <div className="right-head">
            <h6>Other Properties</h6>
            <a href="#">View All</a>
          </div>

          <div className="other-property-cards">
            <div className="other-property-card">
              <img src={property1} alt="..." className="img-fluid" />
              <div className=" card-bottom">
                <div className=" card-left">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className=" card-right ">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
              <div className="card-detail">
                <span>1 Kitchen</span>
                <span> | </span>
                <span> 3 Bedroom</span>
                <span> | </span>
                <span>2 Bathroom</span>
              </div>
            </div>
            <div className="other-property-card">
              <img src={property2} alt="..." className="img-fluid" />
              <div className=" card-bottom">
                <div className=" card-left">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className=" card-right ">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
              <div className="card-detail">
                <span>1 Kitchen</span>
                <span> | </span>
                <span> 3 Bedroom</span>
                <span> | </span>
                <span>2 Bathroom</span>
              </div>
            </div>
            <div className="other-property-card">
              <img src={property3} alt="..." className="img-fluid" />
              <div className=" card-bottom">
                <div className=" card-left">
                  <h5>Bosschestraat 6 The Hague</h5>
                </div>
                <div className=" card-right ">
                  <span>$ </span>
                  <p>13,500</p>
                </div>
              </div>
              <div className="card-detail">
                <span>1 Kitchen</span>
                <span> | </span>
                <span> 3 Bedroom</span>
                <span> | </span>
                <span>2 Bathroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyDetail;
