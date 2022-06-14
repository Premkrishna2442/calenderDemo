import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Insertform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { summary: "", start: { dateTime: "" }, end: { datetime: "" } },
    };
  }
  // const [data,setData]=useState({summary:'',start:{dateTime:''},end:{datetime:''}})
  // const navi=useNavigate()
  insertEvent = () => {
    console.log(this.state.data);
    axios
      .post(
        "https://content.googleapis.com/calendar/v3/calendars/primary/events?alt=json&key=AIzaSyBhDTHmbScfJxJZ8CEcjAi8FgpHWrkNNeI&&scope=https://www.googleapis.com/auth/calendar",
        this.state.data,
        {
          mode: "no-CORS",
          headers: {
            Authorization: `Bearer  ${localStorage.getItem("key")}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => console.log("done"));
  };
  render() {
    const { data } = this.state;
    return (
      <div className="flex-container">
        <div className="innerForm">
          <h2 className="formTitle">Insert event</h2>
          <input
            className="Input"
            onChange={(e) => {
              this.setState({ data: { ...data, summary: e.target.value } });
            }}
            type="text"
            placeholder="Event name"
          />
          <input
            className="Input"
            onChange={(e) => {
              this.setState({
                data: { ...data, start: { dateTime: e.target.value } },
              });
            }}
            type="text"
            placeholder='Start time in formate :"2022-04-29T18:00:00+05:30"'
          />
          <input
            className="Input"
            onChange={(e) => {
              this.setState({
                data: { ...data, end: { dateTime: e.target.value } },
              });
            }}
            type="text"
            placeholder='End time in formate :"2022-04-29T18:00:00+05:30"'
          />
          <button onClick={() => this.insertEvent()} className="Input button">
            <Link to="/">
              <p className="buttonText">Insert Event</p>
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Insertform;
