import React, { useEffect } from "react";
import AddButton from "./AddButton";
import CalanderTable from "./CalanderTable";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import fetchUsers from "./redux/eventActions";
import { connect } from "react-redux";

function Events({ fetch, event, loading }) {
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <div>
        {event ? (
          <CalanderTable data={event} />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <AddButton />
      </div>
    </div>
  );
}

const mapstatetoprops = (state) => {
  return { event: state.events, loading: state.loading };
};

const mapdispatchtoprops = (dispatch) => {
  return {
    fetch: () => dispatch(fetchUsers()),
  };
};
export default connect(mapstatetoprops, mapdispatchtoprops)(Events);
