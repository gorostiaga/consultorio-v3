import style from "@/styles/Team.module.scss";

const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className={`text-center mx-auto mb-5 ${style["fadeInUp"]}`}
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            Doctores
          </p>
          <h1>Our Experience Doctors</h1>
        </div>
        <div className="row g-4">
          <div className={`col-lg-3 col-md-6  ${style["fadeInUp"]}`}>
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="images/team-1.jpg" alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Dayana Quispe</h5>
                <p className="text-primary">Department</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-3 col-md-6  ${style["fadeInUp"]}`}>
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="images/team-2.jpg" alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Marlon Mamani</h5>
                <p className="text-primary">Department</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-3 col-md-6  ${style["fadeInUp"]}`}>
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="images/team-3.jpg" alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Kelly Huanca</h5>
                <p className="text-primary">Department</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-3 col-md-6  ${style["fadeInUp"]}`}>
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="images/team-4.jpg" alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Eulogio Choquetarki</h5>
                <p className="text-primary">Department</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
