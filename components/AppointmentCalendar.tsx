import React, { FC } from "react";
import Calendar from "react-calendar";
import styles from "@/styles/AppointmentCalendar.module.scss";

interface AppointmentCalendarProps {
  passDate: (date: Date) => void;
}

const AppointmentCalendar: FC<AppointmentCalendarProps> = ({ passDate }) => {
  const tileDisabled = ({ date }: { date: Date }): boolean => {
    // Disable Saturdays (day 6) and Sundays (day 0)
    return date.getDay() === 6 || date.getDay() === 0;
  };

  const onDayClickHandler = (dayClicked: Date) => {
    passDate(dayClicked);
  };

  return (
    <div className={`${styles["container"]}`}>
      <div className={`bg-light ${styles["calendar-container"]}`}>
        <Calendar
          onClickDay={onDayClickHandler}
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
