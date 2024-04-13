function FormAddress() {
  return (
    <>
      <div style={{ marginTop: "40px" }}>
        <form className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="col-md-6">
            <input
              type="Email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
        </form>
        <form className="row g-3">
          <div className="col-md-12" style={{ marginTop: "30px" }}>
            <input type="text" className="form-control" placeholder="subject" />
          </div>
        </form>
        <form className="row g-3">
          <div className="col-md-12" style={{ marginTop: "30px" }}>
            <input
              style={{ paddingBottom: "120px" }}
              type="text"
              className="form-control"
              placeholder="Message"
            />
          </div>
          <div style={{ paddingLeft: "30%", marginTop: "20px" }}>
            <button
              className="btn btn-dark nav-item text-light border border-warning rounded-pill"
              style={{ backgroundColor: "#FFC72C" }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormAddress;
