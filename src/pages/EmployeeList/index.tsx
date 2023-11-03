import { useContext } from "react";
import { Link } from "react-router-dom";
import { EmployeeContext } from "../../components/context/EmployeeContext";
import { DeleteButton } from "../../components/DeleteButton";

export type employeeListType = {
  id: number;
  firstName: string;
  lastName: string;
  workplace: string;
  age: number;
};
export const EmployeeList = () => {
  const { deleteButton, employeeList } = useContext(EmployeeContext);

  return (
    <div>
      <h1>Employee list</h1>
      <ul>
        {employeeList.map((employee) => (
          <li key={employee.id}>
            <p>
              {employee.id}
              {employee.firstName}, {employee.lastName}, {employee.workplace},
              {employee.age}
              <button onClick={() => deleteButton(employee.id)}>
                Delete employee
              </button>
            </p>
          </li>
        ))}
      </ul>
      <Link to={"/employees/addEmployee"}>Add employee</Link>
    </div>
  );
};
