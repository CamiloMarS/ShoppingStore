import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

const _styles = {
  menu: {
    width: "300px",
    height: "8vh",
    display: "flex",
    listStyle: "none",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "5px"
  }
};

const _linksCollectionIsEmpty = list => {
  if (typeof list !== "undefined") {
    return list.length > 0 ? true : false;
  }
  return false;
};

const _printList = (collection, func) => {
  if (_linksCollectionIsEmpty(collection)) {
    return collection.map((li, i) => {
      return <Item key={i} text={li.text} href={li.href} changedRute={func} />;
    });
  }
};

const MenuLinks = ({ linksCollection, changedCurrentPage }) => {
  return (
    <ul style={_styles.menu}>
      {_printList(linksCollection, changedCurrentPage)}
    </ul>
  );
};

MenuLinks.propTypes = {
  linksCollection: PropTypes.array.isRequired,
  changedCurrentPage: PropTypes.func.isRequired
};

export default MenuLinks;
