import styles from "@/styles/MainNav.module.scss";

import Link from "next/link";
import { useEffect, useState } from "react";

const MainNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Check if the user has scrolled down at least 20px
      if (scrollY > 20) {
        // Add the new class when the user scrolls down
        setScrolled(true);
      } else {
        // Remove the class when the user scrolls back to the top
        setScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow 
      ${styles["fadeIn"]}
      ${scrolled ? "shadow-sm " : ""}`}
      data-wow-delay="0.1s"
    >
      <Link
        href="index.html"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h1 className="m-0 text-primary">
          <i className="far fa-hospital me-3"></i>Consultorio
        </h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link href="index.html" className="nav-item nav-link active">
            Inicio
          </Link>
          <Link href="about.html" className="nav-item nav-link">
            Nosotros
          </Link>
          <Link href="service.html" className="nav-item nav-link">
            Servicios
          </Link>
          <Link href="contact.html" className="nav-item nav-link">
            Contacto
          </Link>
        </div>
        <Link
          href=""
          className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
        >
          Reserva!<i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
      {scrolled && (
        <Link
          href="#"
          className={`position-fixed bottom-0 end-0 m-5 btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top 
          ${styles["fadeIn"]}`}
        >
          <i className="bi bi-arrow-up"></i>
        </Link>
      )}
    </nav>
  );
};

export default MainNav;
