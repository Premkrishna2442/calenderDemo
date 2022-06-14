import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateEvent() {
  const navi = useNavigate();
  const id = useLocation();
  const [data, setData] = useState({
    summary: id.state?.id?.summary,
    start: { dateTime: id.state?.id?.start?.dateTime },
    end: { datetime: id.state?.id?.end?.dateTime },
  });

  const updateEvent = () => {
    axios.patch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events/${id.state.id.id}?key=AIzaSyBhDTHmbScfJxJZ8CEcjAi8FgpHWrkNNeI`,
      data,
      {
        mode: "no-CORS",
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("key") ? localStorage.getItem("key") : null
          }}`,
          Accept: "application/json",
        },
      }
    );
    navi("/");
  };
  return (
    <div className="flex-container">
      <div className="innerForm">
        <h2 className="formTitle">Update event</h2>
        <input
          data-testid={`summary-update`}
          className="Input"
          value={data.summary}
          onChange={(e) => {
            setData({ ...data, summary: e.target.value });
          }}
          type="text"
          placeholder="Event name"
        />
        <input
          className="Input"
          value={data.start.dateTime}
          onChange={(e) => {
            setData({ ...data, start: { dateTime: e.target.value } });
          }}
          type="text"
          placeholder='Start time in formate :"2022-04-29T18:00:00+05:30"'
        />
        <input
          className="Input"
          value={data.end.datetime}
          onChange={(e) => {
            setData({ ...data, end: { dateTime: e.target.value } });
          }}
          type="text"
          placeholder='End time in formate :"2022-04-29T18:00:00+05:30"'
        />
        <button className="Input button" onClick={() => updateEvent()}>
          <p className="buttonText">Update Event</p>{" "}
        </button>
      </div>
    </div>
  );
}

export default UpdateEvent;
