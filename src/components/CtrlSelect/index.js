import React from "react";

const styles = {
  sel: {
    padding: "8px !important",
    border: "none",
    boxShadow: "2px 0px 3x #000 !important",
    fontSize: "16px",
    background: "transparent"
  },
  opt: {
    margin: "2px"
  }
};

const convertToArray = object => {
  const categories = [];
  for (let item in object) {
    categories.push(object[item]);
  }
  return categories;
};

const validateObject = obj => {
  const data = convertToArray(obj);
  if (data.length > 0) {
    return data.map((item, i) => {
      return (
        <option key={i} value={item.id} style={styles.opt}>
          {item.name}
        </option>
      );
    });
  }
};

const CtrlSelect = ({ options, callback }) => {
  return (
    <select onChange={callback} style={styles.sel}>
      <option value="0">- Seleccionar -</option>
      {validateObject(options)}
    </select>
  );
};

export default CtrlSelect;
