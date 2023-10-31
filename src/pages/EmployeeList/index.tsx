import { useContext } from "react";
import { Link } from "react-router-dom";
import { EmployeeContext } from "../../components/context/EmployeeContext";

export type employeeListType = {
  id: number;
  firstName: string;
  lastName: string;
  workplace: string;
  age: number;
};
export const EmployeeList = () => {
  const { employeeList } = useContext(EmployeeContext);

  return (
    <div>
      <h1>Employee list</h1>
      <ul>
        {employeeList.map((employee) => (
          <li key={employee.id}>
            <p>
              {employee.firstName}, {employee.lastName}, {employee.workplace},
              {employee.age};
            </p>
          </li>
        ))}
      </ul>
      <Link to={"/employees/addEmployee"}>Add employee</Link>
    </div>
  );
};
