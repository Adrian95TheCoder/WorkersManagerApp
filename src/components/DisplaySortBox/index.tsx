import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";
import "./DisplaySortBox.scss"
export const DisplaySortBox = () => {
  const {
    sortValue,
    handleSortDisplay,
    displayNumber,
    handleDisplay,
    curPage,
  } = useContext(EmployeeContext);
  return (
    <div className="sortBox">
      <div className="sortBox__sortValue"><label htmlFor="sortValue">
        Sort paratemers&nbsp;
        <select className="sortBox__sortValue--select"
          name="sortValue"
          id="sortValue"
          value={sortValue}
          onChange={handleSortDisplay}
        >
          <option value="">Select sort type</option>
          <option value="_sort=id&_order=asc">sort by id ascending</option>
          <option value="_sort=id&_order=desc">sort by id descending</option>
          <option value="_sort=firstName&_order=asc">
            sort by first name ascending
          </option>
          <option value="_sort=firstName&_order=desc">
            sort by first name descending
          </option>
          <option value="_sort=lastName&_order=asc">
            sort by last name ascending
          </option>
          <option value="_sort=lastName&_order=desc">
            sort by last name descending
          </option>
          <option value="_sort=age&_order=asc">sort by age ascending</option>
          <option value="_sort=age&_order=desc">sort by age descending</option>
        </select>
      </label></div>
      <div className="sortBox__displayNumber">
      <label htmlFor="displayNumber">
        Show employees&nbsp;
        <select
          name="displayNumber"
          id="displayNumber"
          value={displayNumber}
          onChange={handleDisplay}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
      </div>
      
    </div>
  );
};
