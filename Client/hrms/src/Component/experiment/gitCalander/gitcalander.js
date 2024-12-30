import React, { Component, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Tooltip as ReactToolTip } from "react-tooltip";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calander.css';

export default class AttendanceCalendar extends Component {
  state = {
    // Sample attendance data for 10 days
    events: [
      {
        id: "1",
        title: "John Doe - Present",
        description: "Login: 09:00 AM | Logout: 06:00 PM",
        start: "2024-12-24T00:00:00",
        end: "2024-12-24T23:59:59",
        backgroundColor: "#28a745", // Green for present
        textColor: "white",
      },
      {
        id: "2",
        title: "John Doe - Absent",
        description: "No attendance details available",
        start: "2024-12-25T00:00:00",
        end: "2024-12-25T23:59:59",
        backgroundColor: "#dc3545", // Red for absent
        textColor: "white",
      },
      {
        id: "3",
        title: "John Doe - Present",
        description: "Login: 09:10 AM | Logout: 05:50 PM",
        start: "2024-12-26T00:00:00",
        end: "2024-12-26T23:59:59",
        backgroundColor: "#28a745",
        textColor: "white",
      },
      {
        id: "4",
        title: "John Doe - Absent",
        description: "No attendance details available",
        start: "2024-12-27T00:00:00",
        end: "2024-12-27T23:59:59",
        backgroundColor: "#dc3545",
        textColor: "white",
      },
      {
        id: "5",
        title: "John Doe - Present",
        description: "Login: 09:30 AM | Logout: 06:30 PM",
        start: "2024-12-28T00:00:00",
        end: "2024-12-28T23:59:59",
        backgroundColor: "#28a745",
        textColor: "white",
      },
      {
        id: "6",
        title: "John Doe - Present",
        description: "Login: 09:15 AM | Logout: 06:00 PM",
        start: "2024-12-29T00:00:00",
        end: "2024-12-29T23:59:59",
        backgroundColor: "#28a745",
        textColor: "white",
      },
      {
        id: "7",
        title: "John Doe - Absent",
        description: "No attendance details available",
        start: "2024-12-30T00:00:00",
        end: "2024-12-30T23:59:59",
        backgroundColor: "#dc3545",
        textColor: "white",
      },
      {
        id: "8",
        title: "John Doe - Present",
        description: "Login: 09:00 AM | Logout: 05:45 PM",
        start: "2024-12-31T00:00:00",
        end: "2024-12-31T23:59:59",
        backgroundColor: "#28a745",
        textColor: "white",
      },
      {
        id: "9",
        title: "John Doe - Present",
        description: "Login: 08:50 AM | Logout: 05:30 PM",
        start: "2025-01-01T00:00:00",
        end: "2025-01-01T23:59:59",
        backgroundColor: "#28a745",
        textColor: "white",
      },
      {
        id: "10",
        title: "John Doe - Absent",
        description: "No attendance details available",
        start: "2025-01-02T00:00:00",
        end: "2025-01-02T23:59:59",
        backgroundColor: "#dc3545",
        textColor: "white",
      },
    ],
    date: new Date(),
  };

  handleEventPositioned = (info) => {
    const tooltipContent =
      info.event.extendedProps.description || "No attendance details available";
    info.el.setAttribute("data-tooltip-id", `tooltip-${info.event.id}`);
    info.el.setAttribute("data-tooltip-content", tooltipContent);
  };

  getAttendanceStatus = (loginTime, logoutTime) => {
    if (!loginTime && !logoutTime) return { status: "A", color: "red" }; // Absent
    if (logoutTime && loginTime) {
      const login = new Date(`2023-11-01T${loginTime}:00Z`);
      const logout = new Date(`2023-11-01T${logoutTime}:00Z`);
      if (logout - login >= 9 * 60 * 60 * 1000)
        return { status: "P", color: "green" }; // Present
    }
    return { status: "P/A", color: "orange" }; // Partial
  };

  tileClassName = ({ date }) => {
    const dateKey = date.toISOString().split("T")[0];
    const attendanceForDate = this.state.events.find(
      (entry) => entry.start.includes(dateKey)
    );

    if (attendanceForDate) {
      const { status } = this.getAttendanceStatus(
        attendanceForDate.loginTime,
        attendanceForDate.logoutTime
      );
      if (status === "P") return "present";
      if (status === "A") return "absent";
      if (status === "P/A") return "partial";
    }
    return "";
  };

  tileContent = ({ date }) => {
    const dateKey = date.toISOString().split("T")[0];
    const attendanceForDate = this.state.events.filter((entry) =>
      entry.start.includes(dateKey)
    );

    if (!attendanceForDate.length) return null;

    return (
      <div>
        {attendanceForDate.map((entry, index) => {
          const { status } = this.getAttendanceStatus(
            entry.loginTime,
            entry.logoutTime
          );
          return <div key={index}>{status}</div>;
        })}
      </div>
    );
  };

  render() {
    return (
      <>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          events={this.state.events}
          eventPositioned={this.handleEventPositioned}
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: false,
            hour12: false,
          }}
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
        />

        {this.state.events.map((event) => (
          <ReactToolTip
            key={event.id}
            id={`tooltip-${event.id}`}
            place="top"
            effect="solid"
            clickable={true}
          />
        ))}

        <Calendar
          onChange={(date) => this.setState({ date })}
          value={this.state.date}
          tileContent={this.tileContent}
          tileClassName={this.tileClassName}
        />
      </>
    );
  }
}
