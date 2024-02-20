import React, { FC, Key, ReactNode, useEffect, useState } from "react";
import { schedule } from "@/assets/ScheduleConfig";
import styles from "@/styles/Schedule.module.scss";
import UserForm from "./UserForm";
import { bookings } from "@/assets/Bookings";

interface ScheduleProps {
  passedDate: Date;
}

interface Bookings {
  [date: string]: Booking;
}

interface Booking {
  [time: string]: string;
}
const Schedule: FC<ScheduleProps> = ({ passedDate }) => {
  const [userFormMask, setUserFormMask] = useState<Boolean[]>([]);

  const [selectedDate, setSelectedDate] = useState<string>("20/02/2024");
  const [availableHours, setAvailableHours] = useState<{
    [key: string]: string | null;
  }>({});

  const fetchedBookings: Bookings = bookings;

  const scheduleItemClickHandler = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const index = parseInt(event.currentTarget.dataset.index || "0", 10);

    const newUserFormMaskArray = userFormMask.map((item, i) => {
      if (i === index) return !userFormMask[i];
      else return false;
    });
    setUserFormMask(newUserFormMaskArray);
  };

  useEffect(() => {
    const morningOpen = new Date(`2000-01-01T${schedule.morningOpen}`);
    const morningClose = new Date(`2000-01-01T${schedule.morningClose}`);
    const eveningOpen = new Date(`2000-01-01T${schedule.eveningOpen}`);
    const eveningClose = new Date(`2000-01-01T${schedule.eveningClose}`);
    const durationMins = parseInt(schedule.durationMins);

    const hours: { [key: string]: string | null } = {};
    let userFormMaskArray: Boolean[];

    for (
      let time = morningOpen;
      time <= eveningClose;
      time.setMinutes(time.getMinutes() + durationMins)
    ) {
      if (schedule.break && morningClose < time && time < eveningOpen) continue;

      const formattedTime = time.toTimeString().slice(0, 5);
      hours[formattedTime] =
        fetchedBookings[selectedDate]?.[formattedTime] || null;
    }
    userFormMaskArray = Array(Object.keys(availableHours).length).fill(false);

    for (let hour in hours) {
      console.log(`${hour} : ${hours[hour]}`);
    }
    setAvailableHours(hours);
    setUserFormMask(userFormMaskArray);
  }, [selectedDate, fetchedBookings]);

  const formatDate = (date: Date) => {
    return Intl.DateTimeFormat("es-BO", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  useEffect(() => {
    setSelectedDate(formatDate(passedDate));
  }, [passedDate]);

  return (
    <div className={styles["main-container"]}>
      <div className="container">
        {Object.entries(availableHours).map(([time, value], index) => (
          <div
            key={index}
            className={`row ${styles["row-container"]}`}
            onClick={value === null ? scheduleItemClickHandler : undefined}
            data-index={index}
          >
            <div className="col-3">{time}</div>
            <div className="col-9">{value}</div>
            {userFormMask[index] && (
              <div onClick={(event) => event.stopPropagation()}>
                <UserForm />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Schedule;
