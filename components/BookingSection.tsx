import React, { useState } from "react";
import Schedule from "./Schedule";
import styles from "@/styles/BookingSection.module.scss";
import AppointmentCalendar from "./AppointmentCalendar";

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const getDate = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className={`bg-primary ${styles["main-container"]}`}>
      <div className={`bg-light ${styles["main-container_item1"]}`}>
        <Schedule passedDate={selectedDate} />
      </div>
      <div className={`${styles["main-container_item2"]}`}>
        <AppointmentCalendar passDate={getDate} />
      </div>
    </div>
  );
};

export default BookingSection;
