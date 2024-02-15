import React from "react";
import { schedule } from "@/assets/ScheduleConfig";
import styles from "@/styles/Schedule.module.scss";

const Schedule = () => {
  const morningOpen = new Date(`2000-01-01T${schedule.morningOpen}`);
  const morningClose = new Date(`2000-01-01T${schedule.morningClose}`);
  const eveningOpen = new Date(`2000-01-01T${schedule.eveningOpen}`);
  const eveningClose = new Date(`2000-01-01T${schedule.eveningClose}`);
  const durationMins = parseInt(schedule.durationMins);

  const scheduleItems = [];

  if (schedule.break) {
    for (
      let time = morningOpen;
      time <= morningClose;
      time.setMinutes(time.getMinutes() + durationMins)
    ) {
      const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      scheduleItems.push(
        <div key={formattedTime} className="row">
          <div className="col">{formattedTime}</div>
          <div className="col"></div>
        </div>
      );
    }

    for (
      let time = eveningOpen;
      time <= eveningClose;
      time.setMinutes(time.getMinutes() + durationMins)
    ) {
      const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      scheduleItems.push(
        <div key={formattedTime} className="row">
          <div className="col">{formattedTime}</div>
          <div className="col"></div>
        </div>
      );
    }
  } else {
    for (
      let time = morningOpen;
      time <= eveningClose;
      time.setMinutes(time.getMinutes() + durationMins)
    ) {
      const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      scheduleItems.push(
        <div key={formattedTime} className="row">
          <div className="col">{formattedTime}</div>
          <div className="col"></div>
        </div>
      );
    }
  }

  return (
    <div className={styles["main-container"]}>
      <div className="container">{scheduleItems}</div>
    </div>
  );
};
export default Schedule;
