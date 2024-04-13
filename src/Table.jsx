import "./App.css";
function Table() {
  return (
    <>
      <div className="Table">
        <div className="container">
          <div style={{ color: "whitesmoke" }}>
            <h5>Reservation</h5>
          </div>
          <div>
            <h2 style={{ color: "#FFC72C" }}>Book a Table</h2>
          </div>
          <form className="row g-3" style={{ marginTop: "20px" }}>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="col-md-3">
              <input
                type="Email"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Number"
              />
            </div>
          </form>
          <form className="row g-3" style={{ marginTop: "20px" }}>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Date" />
            </div>
            <div className="col-md-3">
              <input type="Email" className="form-control" placeholder="Time" />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="# of people"
              />
            </div>
          </form>
          <form className="row g-3" style={{ marginTop: "30px" }}>
            <div className="col-md-9 ">
              <input
                style={{ paddingBottom: "70px" }}
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Message"
              />
            </div>
            <div style={{ paddingLeft: "30%", marginTop: "20px" }}>
              <button
                className="btn btn-dark nav-item text-light border border-warning rounded-pill"
                style={{ backgroundColor: "#F0E68C" }}
              >
                Book a table
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Table;
