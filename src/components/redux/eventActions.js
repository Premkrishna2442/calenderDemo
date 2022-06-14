import { success, request, failure } from "./userType";
import axios from "axios";
export const userRequest = () => {
  return {
    type: request,
  };
};

export const userSuccess = (users) => {
  return {
    type: success,
    payload: users,
  };
};

export const userFailure = (error) => {
  return {
    type: failure,
    payload: error,
  };
};

const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events?key=AIzaSyBhDTHmbScfJxJZ8CEcjAi8FgpHWrkNNeI  &&scope=https://www.googleapis.com/auth/calendar",
        {
          mode: "no-CORS",
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("key") ? localStorage.getItem("key") : "null"
            }}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        const users = res.data.items;
        dispatch(userSuccess(users));
      })
      .catch((error) => {
        const err = error.message;
        dispatch(userFailure(err));
      });
  };
};

export default fetchUsers;
