import React, { useEffect, useState } from "react";
import { photos } from "@/assets/Images";
import Carousel from "./Carousel";
import style from "@/styles/Header.module.scss";

const Header = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCounter((prev) => prev + 1), 0.5);

    if (counter >= 1234) {
      clearInterval(timer);
    }

    // Clean up the interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  return (
    <div
      className={`container-fluid header bg-primary p-0 mb-5 ${style["main__container"]}`}
    >
      <div className="row g-0 align-items-center flex-column-reverse flex-lg-row h-100">
        <div
          className={`col-lg-6 p-5 wow ${style["fadeIn"]}`}
          data-wow-delay="0.1s"
        >
          <h1 className="display-4 text-white mb-5">
            Good Health Is The Root Of All Heppiness
          </h1>
          <div className="row g-4">
            <div className="col-sm-4">
              <div className="border-start border-light ps-4">
                <h2 className="text-white mb-1" data-toggle="counter-up">
                  {counter}
                </h2>
                <p className="text-light mb-0">Expert Doctors</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border-start border-light ps-4">
                <h2 className="text-white mb-1" data-toggle="counter-up">
                  {counter}
                </h2>
                <p className="text-light mb-0">Medical Stuff</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="border-start border-light ps-4">
                <h2 className="text-white mb-1" data-toggle="counter-up">
                  {counter}
                </h2>
                <p className="text-light mb-0">Total Patients</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-lg-6 h-100 ${style["fadeIn"]}`}
          data-wow-delay="0.5s"
        >
          <div className="owl-carousel header-carousel h-100">
            <Carousel photos={photos} autoSlide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
