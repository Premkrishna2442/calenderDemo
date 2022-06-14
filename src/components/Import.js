import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Import extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { iCalUID: "", start: { dateTime: "" }, end: { datetime: "" } },
    };
  }
  // const [data,setData]=useState({summary:'',start:{dateTime:''},end:{datetime:''}})
  // const navi=useNavigate()
  insertEvent = () => {
    // console.log(this.state.data)
    axios
      .post(
        "https://content.googleapis.com/calendar/v3/calendars/primary/events/import?alt=json&key=AIzaSyBhDTHmbScfJxJZ8CEcjAi8FgpHWrkNNeI",
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
          <h2 className="formTitle">Import event</h2>
          <input
            className="Input"
            onChange={(e) => {
              this.setState({ data: { ...data, iCalUID: e.target.value } });
            }}
            type="text"
            placeholder=" enter UID"
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
              <p className="buttonText">Import Event</p>
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Import;
