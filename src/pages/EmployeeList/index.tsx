import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../components/context/EmployeeContext";
//import { DeleteButton } from "../../components/DeleteButton";
import "./EmployeeList.scss";
import { useDebounce } from "../../components/Hooks/useDebouce";

export type employeeListType = {
  id: number;
  firstName: string;
  lastName: string;
  workplace: string;
  age: number;

  // for search
  city: string;
};
export const EmployeeList = () => {
  const {
    deleteButton,
    employeeList,
    inputValue,
    handleInputSearch,
    setInputValue,
  } = useContext(EmployeeContext);

  /*  search  */
  const { search } = useLocation();
  const [filteredList, setFilteredList] = useState(employeeList);
  const searchValue = useDebounce(inputValue, 200);
  const navigate = useNavigate();

  useEffect(() => {
    setInputValue(search.slice(3));
  }, [search, setInputValue]);

  useEffect(() => {
    searchValue.length > 0
      ? navigate("/employees?q=" + searchValue)
      : navigate("/employees");
  }, [navigate, searchValue]);

  useEffect(() => {
    if (search) {
      console.log("search", search);
      const searchParam = search.slice(3);
      console.log("searchParam", searchParam);

      const searchList = employeeList.filter(
        (employee) =>
          employee.lastName.includes(searchParam) ||
          employee.firstName.includes(searchParam) ||
          employee.age.toString().includes(searchParam) ||
          employee.workplace.includes(searchParam)
        /*||
          employee.gender.includes(searchParam) ||
          employee.email.includes(searchParam) ||
          employee.phone.includes(searchParam) ||
          employee.address.includes(searchParam) ||
          employee.city.includes(searchParam) ||
          employee.state.includes(searchParam) ||
          employee.startWork.includes(searchParam)*/
      );
      console.log("searchList", searchList);
      setFilteredList(searchList);
    } else setFilteredList(employeeList);
  }, [search, employeeList]);
  /*  search  */

  const details = (employee_id: number) => {
    navigate(`/employees/${employee_id}`);
  };

  return (
    <div>
      <h2 className="EmployeeList__h2">Employee list</h2>
      {/*  search  */}
      <input
        className="EmployeeList__search"
        type="search"
        name="search"
        placeholder="Search Last Name"
        value={inputValue}
        onChange={handleInputSearch}
      />

      {/*  <ul>  */}
      <table className="EmployeeList__table">
        <tr>
          <p className="EmployeeList__row">
            <th className="EmployeeList__employee_id">Id</th>
            <th className="EmployeeList__employee_firstName">First Name</th>
            <th className="EmployeeList__employee_lastName">Last Name</th>
            <th className="EmployeeList__employee_workplace">Workplace</th>
            <th className="EmployeeList__employee_age">Age</th>
            <th className="EmployeeList__employee_delete_button">
              Delete Button
            </th>
            <th className="EmployeeList__details">Details Button</th>
          </p>

          {filteredList.length > 0 ? (
            <ul className="EmployeeList__list">
              {filteredList.map((employee) => (
                <li key={employee.id}>
                  <p className="EmployeeList__row">
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
                    <td className="EmployeeList__employee_age">
                      {employee.age}
                    </td>
                    <td className="EmployeeList__employee_delete_button">
                      <button onClick={() => deleteButton(employee.id)}>
                        Delete employee
                      </button>
                    </td>
                    <td className="EmployeeList__details">
                      <button onClick={() => details(employee.id)}>
                        Details
                      </button>
                    </td>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Empty list</p>
          )}
        </tr>
      </table>
      {/*   </ul> */}
      <Link to={"/employees/addEmployee"}>
        <button className="EmployeeList__addEmployee">Add employee</button>
      </Link>
    </div>
  );
};
