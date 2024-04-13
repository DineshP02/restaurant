import gallery1 from "./assets/gallery-1.jpg";
import gallery2 from "./assets/gallery-2.jpg";
import gallery3 from "./assets/gallery-3.jpg";
import gallery4 from "./assets/gallery-4.jpg";
import gallery5 from "./assets/gallery-5.jpg";
import gallery6 from "./assets/gallery-6.jpg";
import gallery7 from "./assets/gallery-7.jpg";
import gallery8 from "./assets/gallery-8.jpg";
import "./App.css";
function Gallery() {
  return (
    <>
      <div className="Gallery">
        <div className="container">
          <div style={{ color: "whitesmoke" }}>
            <h5>Gallery</h5>
          </div>
          <div>
            <h2 style={{ color: "#FFC72C" }}>
              Some photos from our Restaurant
            </h2>
          </div>
          <div className="row g-1" style={{ marginTop: "15px" }}>
            <div className="col-md-3">
              <img src={gallery1} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery2} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery3} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery4} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery5} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery6} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery7} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery8} className="img-thumbnail" alt="..."></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
