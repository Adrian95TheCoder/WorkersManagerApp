import { useContext } from "react";

import { EmployeeContext } from "../context/EmployeeContext";

export const InputSearchBox = () => {
  const { inputValue, handleInputSearch } = useContext(EmployeeContext);
  return (
    <div>
      <input
        className="EmployeeList__search"
        type="search"
        name="search"
        placeholder="Search Last Name"
        value={inputValue}
        onChange={handleInputSearch}
      />
    </div>
  );
};
