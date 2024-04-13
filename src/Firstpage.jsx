import Navbar from "./Navbar.jsx";
import "./App.css";
import { FaPlayCircle } from "react-icons/fa";

function Firstpage() {
  const handleMouseEnter = (event) => {
    event.target.style.transform = "scale(1.1)"; // Scale up on hover
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = "scale(1)"; // Revert back to original size
  };
  return (
    <div className="parent">
      <div>
        <Navbar />
        <div className="container ">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              marginTop: "120px",
            }}
          >
            <div>
              <div style={{}}>
                <h1 style={{ fontSize: "45px", color: "white" }}>
                  Welcome to{" "}
                  <span style={{ color: "#FFC72C" }}>Restaurantly</span>
                </h1>
              </div>
              <div
                style={{
                  paddingLeft: "15px",
                  color: "whitesmoke",
                }}
              >
                <h4>Delivering great food for more than 18 years !</h4>
              </div>

              <div
                style={{
                  marginTop: "20px",

                  display: "flex",
                  gap: "30px",
                }}
              >
                {" "}
                <button
                  className="btn btn-dark nav-item text-light  border-warning rounded-pill "
                  style={{
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease",

                    paddingLeft: "30px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f0e68c";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  Our menu
                </button>
                <button
                  className="btn btn-dark nav-item text-light  border-warning rounded-pill "
                  style={{
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease",

                    paddingLeft: "30px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f0e68c";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  Book a table
                </button>
              </div>
            </div>
            <div
              style={{
                fontSize: "50px",
              }}
            >
              <a
                href="https://youtu.be/u6BOC7CDUTQ?si=OvWxrIP81CXbDdE9"
                style={{ color: "#FFC72C" }}
              >
                <FaPlayCircle
                  style={{
                    backgroundColor: "white",
                    borderRadius: "30px",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
