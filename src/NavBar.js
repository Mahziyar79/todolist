import React from "react";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "UnCompleted", label: "UnCompleted" },
];

const NavBar = ({ totlaUncompleted, selectedOption, valueHandler }) => {
  if (!totlaUncompleted) return <h3>Add Some Todos</h3>;
  return (
    <header>
      <span>UnCompleted Tasks : {totlaUncompleted}</span>

      <Select
        onChange={valueHandler}
        value={selectedOption}
        options={options}
        className="selectInput"
      />
    </header>
  );
};

export default NavBar;
