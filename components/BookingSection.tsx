import React from "react";
import Schedule from "./Schedule";
import styles from "@/styles/BookingSection.module.scss";
import AppointmentCalendar from "./AppointmentCalendar";

const BookingSection = () => {
  return (
    <div className={`bg-primary ${styles["main-container"]}`}>
      <div className={`bg-light ${styles["main-container_item1"]}`}>
        <Schedule />
      </div>
      <div className={`${styles["main-container_item2"]}`}>
        <AppointmentCalendar />
      </div>
    </div>
  );
};

export default BookingSection;
