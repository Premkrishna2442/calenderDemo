import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/AddOutlined";
import { Link } from "react-router-dom";
class AddButton extends Component {
  fabStyle = {
    position: "fixed",
    bottom: 40,
    right: 20,
  };

  render() {
    return (
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab color="primary" aria-label="add" style={this.fabStyle}>
          <div role="add" className="insertButton">
            <Link to="/insert">
              <AddIcon />
            </Link>
          </div>
        </Fab>
      </Box>
    );
  }
}

export default AddButton;
