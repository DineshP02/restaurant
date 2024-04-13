import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { CiMobile2 } from "react-icons/ci";
import FormAddress from "./FormAddress.jsx";
function Address() {
  return (
    <>
      <div className="Address">
        <div className="container ">
          <div className="row g-3">
            <div className="col-md-6">
              <div style={{ display: "flex" }}>
                <div>
                  <FaLocationDot
                    style={{
                      fontSize: "40px",
                      borderRadius: "50%",
                      padding: "10px",
                      backgroundColor: "#FFC72C",
                      color: "white",
                    }}
                  />
                </div>
                <div style={{ paddingLeft: "10px", color: "white" }}>
                  <h6>Location :</h6>
                  <p>A108 Adam street,New York,NY535022</p>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div>
                  <FaClock
                    style={{
                      fontSize: "40px",
                      borderRadius: "50%",
                      padding: "10px",
                      backgroundColor: "#FFC72C",
                      color: "white",
                    }}
                  />
                </div>
                <div style={{ paddingLeft: "10px", color: "white" }}>
                  <h6>Open Hours :</h6>
                  <p>Monday-Saturday :</p>
                  <p>11:00 AM-23:00 PM</p>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div>
                  <TfiEmail
                    style={{
                      fontSize: "40px",
                      borderRadius: "50%",
                      padding: "10px",
                      backgroundColor: "#FFC72C",
                      color: "white",
                    }}
                  />
                </div>
                <div style={{ paddingLeft: "10px", color: "white" }}>
                  <h6>Email :</h6>
                  <p>info @ example.com</p>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div>
                  <CiMobile2
                    style={{
                      fontSize: "40px",
                      borderRadius: "50%",
                      padding: "10px",
                      backgroundColor: "#FFC72C",
                      color: "white",
                    }}
                  />
                </div>
                <div style={{ paddingLeft: "10px", color: "white" }}>
                  <h6>Call :</h6>
                  <p>+1 55895548855s</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <FormAddress />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
