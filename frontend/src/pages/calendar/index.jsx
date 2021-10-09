import { useState, useEffect } from "react";
import { buildCalendar } from "./calendar";
import { CalendarHeader } from "./header"

import { dayStyles, beforeToday } from "./dayStyles"
import "./styles.css"

export const Calendar = ({ currentDate, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const newDate = buildCalendar(currentDate)
    setCalendar(newDate);
  }, [currentDate]);

  return (
    <main className="main">
      <section className="container">
        <a href="/">
        </a>
        <div className="calendar">
          <CalendarHeader key="index" currentDate={currentDate} setCurrentDate={onChange} />
          <div className="body-calendar">
            <div className="day-names">
              {
                ["d", "s", "t", "q", "q", "s", "s"].map((d) => (
                  <div key={d} className="week">{d}</div>
                ))
              }
            </div>
            {calendar.map((week) => (
              <div key={week}>
                {week.map((day) => (
                  <div key={day} className="day" onClick={() => !beforeToday(day) && onChange(day)}>
                    <div className={dayStyles(day, currentDate)}>
                      {day.format("D").toString()}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}