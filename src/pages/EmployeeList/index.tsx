import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../components/context/EmployeeContext";
import "./EmployeeList.scss";
import { useDebounce } from "../../components/Hooks/useDebouce";
import ReactDOM from "react-dom";

export const EmployeeList = () => {
  const {
    deleteButton,
    employeeList,
    inputValue,
    displayNumber,
    sortValue,
    curPage,
    handleDisplay,
    handleSortDisplay,
    previousPage,
    nextPage,
    handleInputSearch,
  } = useContext(EmployeeContext);

  /*  search  */
  // const { search } = useLocation();
  // const [filteredList, setFilteredList] = useState(employeeList);
  // const searchValue = useDebounce(inputValue, 200);
  const navigate = useNavigate();
  // const contextValue = useContext(EmployeeContext);
  // console.log("Context Value:", contextValue);

  // useEffect(() => {
  //   setInputValue(search.slice(3));
  // }, [search, setInputValue]);

  // useEffect(() => {
  //   searchValue.length > 0
  //     ? navigate("/employees?q=" + searchValue)
  //     : navigate("/employees");
  // }, [navigate, searchValue]);

  // useEffect(() => {
  //   if (search) {
  //     console.log("search", search);
  //     const searchParam = search.slice(3);
  //     console.log("searchParam", searchParam);

  //     const searchList = employeeList.filter(
  //       (employee) =>
  //         employee.lastName.includes(searchParam) ||
  //         employee.firstName.includes(searchParam) ||
  //         employee.age.toString().includes(searchParam) ||
  //         employee.workplace.includes(searchParam)
  //       /*||
  //         employee.gender.includes(searchParam) ||
  //         employee.email.includes(searchParam) ||
  //         employee.phone.includes(searchParam) ||
  //         employee.address.includes(searchParam) ||
  //         employee.city.includes(searchParam) ||
  //         employee.state.includes(searchParam) ||
  //         employee.startWork.includes(searchParam)*/
  //     );
  //     console.log("searchList", searchList);
  //     setFilteredList(searchList);
  //   } else setFilteredList(employeeList);

  // }, [search, employeeList]);

  const details = (employee_id: number) => {
    navigate(`/employees/${employee_id}`);
  };

  const renderTable = () => {
    console.log("renderTable");
    console.log("curPage");
    return (
      <div>
        <h2 className="EmployeeList__h2">Employee list</h2>
        <div>
          <label htmlFor="sortValue">
            Sort paratemers
            <select
              name="sortValue"
              id="sortValue"
              value={sortValue}
              onChange={handleSortDisplay}
            >
              <option value="">Select sort type</option>
              <option value="_sort=id&_order=asc">sort by id ascending</option>
              <option value="_sort=id&_order=desc">
                sort by id descending
              </option>
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
              <option value="_sort=age&_order=asc">
                sort by age ascending
              </option>
              <option value="_sort=age&_order=desc">
                sort by age descending
              </option>
            </select>
          </label>
          <label htmlFor="displayNumber">
            Liczba wyświetlanych pracowników
            <select
              name="displayNumber"
              id="displayNumber"
              value={displayNumber}
              onChange={handleDisplay}
            >
              <option value={100}>Wybierz</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </label>
          <p>Choose value: {displayNumber}</p>
        </div>
        <input
          className="EmployeeList__search"
          type="search"
          name="search"
          placeholder="Search Last Name"
          value={inputValue}
          onChange={handleInputSearch}
        />

        <table className="EmployeeList__table3">
          <thead>
            <tr>
              <th className="EmployeeList__employee_lp">No</th>
              <th className="EmployeeList__employee_id">Id</th>
              <th className="EmployeeList__employee_firstName">First Name</th>
              <th className="EmployeeList__employee_lastName">Last Name</th>
              <th className="EmployeeList__employee_workplace">Workplace</th>
              <th className="EmployeeList__employee_age">Age</th>
              <th className="EmployeeList__employee_delete_button">
                Delete Button
              </th>
              <th className="EmployeeList__details">Details Button</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee, index) => (
              <tr key={employee.id}>
                <td className="EmployeeList__employee_lp">
                  {index + 1 + (curPage - 1) * 10}
                </td>
                <td className="EmployeeList__employee_id">{employee.id}</td>
                <td className="EmployeeList__employee_firstName">
                  {employee.firstName}
                </td>
                <td className="EmployeeList__employee_lastName">
                  {employee.lastName}
                </td>
                <td className="EmployeeList__employee_workplace">
                  {employee.workplace}
                </td>
                <td className="EmployeeList__employee_age">{employee.age}</td>
                <td className="EmployeeList__employee_delete_button">
                  <button onClick={() => deleteButton(employee.id)}>
                    Delete employee
                  </button>
                </td>
                <td className="EmployeeList__details">
                  <button onClick={() => details(employee.id)}>Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="EmployeeList__addEmployee" onClick={previousPage}>
          Previous Page
        </button>
        <button className="EmployeeList__addEmployee" onClick={nextPage}>
          Next Page
        </button>

        <Link to={"/employees/addEmployee"}>
          <button className="EmployeeList__addEmployee">Add employee</button>
        </Link>
      </div>
    );
  };

  return renderTable();
};
