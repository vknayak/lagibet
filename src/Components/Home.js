import React, { Component } from "react";
import history from "./history";
import Header from "./Header";
import { Button, Box } from "@material-ui/core";
export class Home extends Component {

    loginHandler = () => {
      history.push("/login");
    };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Box m={3}>
          <Button
            color="inherit"
            onClick={this.loginHandler}
            style={{ backgroundColor: "Brown", marginLeft: 20 }}
          >
            Login
          </Button>
        </Box>
      </React.Fragment>
    );
  }
}

export default Home;
