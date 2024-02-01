import style from "@/styles/Feature.module.scss";

const Feature = () => {
  return (
    <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
      <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className={`col-lg-6 feature-text py-5 ${style["fadeIn"]}`}>
            <div className="p-lg-5 ps-lg-0">
              <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                Features
              </p>
              <h1 className="text-white mb-4">Why Choose Us</h1>
              <p className="text-white mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet
              </p>
              <div className="row g-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: "55px", height: "55px" }}
                    >
                      <i className="fa fa-user-md text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Experience</p>
                      <h5 className="text-white mb-0">Doctors</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: "55px", height: "55px" }}
                    >
                      <i className="fa fa-check text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Quality</p>
                      <h5 className="text-white mb-0">Services</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: "55px", height: "55px" }}
                    >
                      <i className="fa fa-comment-medical text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Positive</p>
                      <h5 className="text-white mb-0">Consultation</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: "55px", height: "55px" }}
                    >
                      <i className="fa fa-headphones text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">24 Hours</p>
                      <h5 className="text-white mb-0">Support</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-6 pe-lg-0  ${style["fadeIn"]}`}
            style={{ minHeight: "400px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="images/feature.jpg"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
