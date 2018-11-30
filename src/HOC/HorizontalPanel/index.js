import React from "react";

const HorizontalPanelHOC = ({ wrappedComponent }) => {
  return class extends React.Component {
    render() {
      return <div />;
    }
  };
};
