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
      <section>
        <div>
          <table className="container-hours">
            <tr>
              <td>08:00</td>
              <td>08:00</td>
              <td>08:00</td>
              <td>08:00</td>
              <td>08:00</td>
              <td>08:00</td>
              <td>08:00</td>
            </tr>
            <tr>
              <td>09:00</td>
              <td>09:00</td>
              <td>09:00</td>
              <td>09:00</td>
              <td>09:00</td>
              <td>09:00</td>
              <td>09:00</td>
            </tr>
            <tr>
              <td>10:00</td>
              <td>10:00</td>
              <td>10:00</td>
              <td>10:00</td>
              <td>10:00</td>
              <td>10:00</td>
              <td>10:00</td>
            </tr>
            <tr>
              <td>11:00</td>
              <td>11:00</td>
              <td>11:00</td>
              <td>11:00</td>
              <td>11:00</td>
              <td>11:00</td>
              <td>11:00</td>
            </tr>
            <tr>
              <td>12:00</td>
              <td>12:00</td>
              <td>12:00</td>
              <td>12:00</td>
              <td>12:00</td>
              <td>12:00</td>
              <td>12:00</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
              <td>13:00</td>
            </tr>
            <tr>
              <td>14:00</td>
              <td>14:00</td>
              <td>14:00</td>
              <td>14:00</td>
              <td>14:00</td>
              <td>14:00</td>
              <td>14:00</td>
            </tr>
            <tr>
              <td>15:00</td>
              <td>15:00</td>
              <td>15:00</td>
              <td>15:00</td>
              <td>15:00</td>
              <td>15:00</td>
              <td>15:00</td>
            </tr>
            <tr>
              <td>16:00</td>
              <td>16:00</td>
              <td>16:00</td>
              <td>16:00</td>
              <td>16:00</td>
              <td>16:00</td>
              <td>16:00</td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  )
}