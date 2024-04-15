function Map() {
  return (
    <div className="Map">
      <div className="container">
        <div style={{ color: "whitesmoke" }}>
          <h5>CONTACT</h5>
        </div>
        <div>
          <h2 style={{ color: "#FFC72C" }}>Contact Us</h2>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <iframe
          className="googlemap"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24178.41272818845!2d-74.006138!3d40.755391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2574ef5fe2c17%3A0x9048dbbcd614a637!2sThe%20Home%20Depot!5e0!3m2!1sen!2sus!4v1713008013204!5m2!1sen!2sus"
          width="1340"
          height="380"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
