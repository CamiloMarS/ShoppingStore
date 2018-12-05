import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

//My components
import HeaderApp from "./components/Header";
import Logo from "./components/Logo";
import MenuLinks from "./components/MenuLinks/Menu";
import Root from "./Route/index";

import { setCurrentPage } from "./reducers/currentPage";
import { watchSession } from "./settings/firebase";

//Settings
import MenuItems from "./settings/index";
import { bindActionCreators } from "redux";

class App extends Component {
  componentDidMount() {
    try {
      watchSession();
    } catch (error) {
      console.log(error);
    }
  }
  changePage = value => {
    this.props.pageToChange(value);
  };

  render() {
    const { currentPage } = this.props;
    return (
      <Router>
        <div className="App">
          <HeaderApp
            logo={
              <Logo image="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L5K1I1WsuQMZ8ecEuWg%2Favatar.png?generation=1518623866348435&alt=media" />
            }
          >
            {
              <MenuLinks
                linksCollection={MenuItems}
                changedCurrentPage={this.changePage}
              />
            }
          </HeaderApp>
          <Root rute={currentPage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.currentPageReducer.currentPage
  };
};

const mapDispathToProps = dispatch => {
  return bindActionCreators({ pageToChange: setCurrentPage }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
