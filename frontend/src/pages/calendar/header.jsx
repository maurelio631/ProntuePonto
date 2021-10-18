import "./styles.css";

export const CalendarHeader = ({currentDate, setCurrentDate}) => {

  function currMonthName() {
    return currentDate.format("MMMM")
  }

  function currYear() {
    return currentDate.format("YYYY")
  }

  function prevWeek(){
    return currentDate.clone().subtract(1, "week")
  }

  function nextWeek(){
    return currentDate.clone().add(1, "week")
  }

  function thisWeek() {
    return currentDate.isSame(new Date(), "week")
  }

  return (
    <div className="header">
        <div className="previous" onClick={() => !thisWeek() && setCurrentDate(prevWeek())}>
          {!thisWeek() ? String.fromCharCode(171): null}
        </div>
        <div className="current">
          {currMonthName()} {currYear()}
        </div>
        <div className="next" onClick={() => setCurrentDate(nextWeek())}>
          {String.fromCharCode(187)}
        </div>
      </div>
  )
}