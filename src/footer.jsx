import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaSkype } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./App.css";
function footer() {
  return (
    <>
      <div className="Footer">
        <div className="container-fluid">
          <div
            className="row g-3"
            style={{ color: "white", paddingtop: "50px" }}
          >
            <div className="col-md-3">
              <div>
                <h5>RESTAURANTLY</h5>
              </div>
              <div style={{ marginTop: "20px" }}>
                <p>A108 Adam Street</p>
                <p>NY 535002,USA</p>
              </div>
              <div>
                <h6>Phone:+155895548855</h6>
              </div>
              <div>
                <h6>Email:info@example.com</h6>
              </div>
              <div
                style={{
                  marginTop: "15px",
                  gap: "10px",
                }}
              >
                <FaTwitter />
                <TiSocialFacebook style={{ marginLeft: "10px" }} />
                <IoLogoInstagram style={{ marginLeft: "10px" }} />
                <FaSkype style={{ marginLeft: "10px" }} />
                <FaLinkedinIn style={{ marginLeft: "10px" }} />
              </div>
            </div>
            <div className="col-md-3">
              <h5>Useful Links</h5>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Home</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> About us</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Services</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Terms of Services</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Privacy policy</p>
              </div>
            </div>
            <div className="col-md-3">
              {" "}
              <h5>Our Services</h5>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Web Design</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Web Development</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Product Management</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Marketing</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Graphic Design</p>
              </div>
            </div>
            <div className="col-md-3">
              <h5>Our Newsletter</h5>
              <div>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
              </div>
              <div className="input-group">
                <input
                  className="form-control "
                  style={{ borderRadius: "20px" }}
                />
                <button
                  className="btn btn-dark nav-item text-light border border-warning rounded-pill"
                  type="button"
                  style={{ backgroundColor: "#FFC72C" }}
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
