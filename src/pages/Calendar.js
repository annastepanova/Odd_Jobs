// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";


export default function Calendar() {
  return (
    <div>
              <Link to="/Services"><button className="contractor-btn">Back To Services</button></Link>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/oddjob"
        style={{ minWidth: "320px", height: "630px" }}
      ></div>
      {/* <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={[
          { title: "event 1", date: "2019-11-25" },
          { title: "event 2", date: "2019-11-26" }
        ]} */}

    </div>

  );
}
