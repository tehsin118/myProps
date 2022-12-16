import React from "react";
import "./invDashboard.scss";
import newProp from "../../../assets/images/newProperty.png";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const InvInvestment = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "80px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div>
      <section className="admin-dashoard">
        <div className="admin-dashboard-content">
          <div className="newly-invested-properties">
            <div className="section-headings">
              <h1>My Investments</h1>
            </div>
            <Slider {...settings}>
              <div className="new-props-card">
                <div className="header">
                  <img src={newProp} alt="" />
                </div>
                <div className="details">
                  <div className="left-d">
                    <h1>Star Sun Hotel & Apartment</h1>

                    <p>
                      <span className="me-2">
                        <Icon
                          icon="material-symbols:location-on"
                          color="black"
                          width="18"
                          height="18"
                        />
                      </span>
                      North Carolina, USA
                    </p>
                  </div>
                  <div className="right-d">
                    <h6 className="currency">
                      <span>$</span>
                      500
                    </h6>
                  </div>
                </div>
              </div>
              <div className="new-props-card">
                <div className="header">
                  <img src={newProp} alt="" />
                </div>
                <div className="details">
                  <div className="left-d">
                    <h1>Star Sun Hotel & Apartment</h1>

                    <p>
                      <span className="me-2">
                        <Icon
                          icon="material-symbols:location-on"
                          color="black"
                          width="18"
                          height="18"
                        />
                      </span>
                      North Carolina, USA
                    </p>
                  </div>
                  <div className="right-d">
                    <h6 className="currency">
                      <span>$</span>
                      500
                    </h6>
                  </div>
                </div>
              </div>
              <div className="new-props-card">
                <div className="header">
                  <img src={newProp} alt="" />
                </div>
                <div className="details">
                  <div className="left-d">
                    <h1>Star Sun Hotel & Apartment</h1>

                    <p>
                      <span className="me-2">
                        <Icon
                          icon="material-symbols:location-on"
                          color="black"
                          width="18"
                          height="18"
                        />
                      </span>
                      North Carolina, USA
                    </p>
                  </div>
                  <div className="right-d">
                    <h6 className="currency">
                      <span>$</span>
                      500
                    </h6>
                  </div>
                </div>
              </div>
              <div className="new-props-card">
                <div className="header">
                  <img src={newProp} alt="" />
                </div>
                <div className="details">
                  <div className="left-d">
                    <h1>Star Sun Hotel & Apartment</h1>

                    <p>
                      <span className="me-2">
                        <Icon
                          icon="material-symbols:location-on"
                          color="black"
                          width="18"
                          height="18"
                        />
                      </span>
                      North Carolina, USA
                    </p>
                  </div>
                  <div className="right-d">
                    <h6 className="currency">
                      <span>$</span>
                      500
                    </h6>
                  </div>
                </div>
              </div>
              <div className="new-props-card">
                <div className="header">
                  <img src={newProp} alt="" />
                </div>
                <div className="details">
                  <div className="left-d">
                    <h1>Star Sun Hotel & Apartment</h1>

                    <p>
                      <span className="me-2">
                        <Icon
                          icon="material-symbols:location-on"
                          color="black"
                          width="18"
                          height="18"
                        />
                      </span>
                      North Carolina, USA
                    </p>
                  </div>
                  <div className="right-d">
                    <h6 className="currency">
                      <span>$</span>
                      500
                    </h6>
                  </div>
                </div>
              </div>
              <div className="new-props-card">
                <div className="header">
                  <img src={newProp} alt="" />
                </div>
                <div className="details">
                  <div className="left-d">
                    <h1>Star Sun Hotel & Apartment</h1>

                    <p>
                      <span className="me-2">
                        <Icon
                          icon="material-symbols:location-on"
                          color="black"
                          width="18"
                          height="18"
                        />
                      </span>
                      North Carolina, USA
                    </p>
                  </div>
                  <div className="right-d">
                    <h6 className="currency">
                      <span>$</span>
                      500
                    </h6>
                  </div>
                </div>
              </div>
              <div className="new-props-card">
                <div className="header">
                  <img src={newProp} alt="" />
                </div>
                <div className="details">
                  <div className="left-d">
                    <h1>Star Sun Hotel & Apartment</h1>

                    <p>
                      <span className="me-2">
                        <Icon
                          icon="material-symbols:location-on"
                          color="black"
                          width="18"
                          height="18"
                        />
                      </span>
                      North Carolina, USA
                    </p>
                  </div>
                  <div className="right-d">
                    <h6 className="currency">
                      <span>$</span>
                      500
                    </h6>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvInvestment;
