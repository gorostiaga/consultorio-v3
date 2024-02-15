import React from "react";
import Calendar from "react-calendar";
import styles from "@/styles/AppointmentCalendar.module.scss";

const AppointmentCalendar = () => {
  const tileDisabled = ({ date }: { date: Date }): boolean => {
    // Disable Saturdays (day 6) and Sundays (day 0)
    return date.getDay() === 6 || date.getDay() === 0;
  };

  return (
    <div className={`${styles["container"]}`}>
      <div className={`bg-light ${styles["calendar-container"]}`}>
        <Calendar
          minDate={new Date()}
          selectRange={false}
          minDetail="month"
          next2Label={null}
          prev2Label={null}
          tileDisabled={tileDisabled}
        />
      </div>
    </div>
  );
};

export default AppointmentCalendar;
