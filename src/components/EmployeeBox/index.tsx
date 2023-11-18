import { Link } from "react-router-dom";
import { useContext } from "react";

import { EmployeeContext } from "../context/EmployeeContext";
type EmployeeBoxProps = {
  id: number;
  firstName: string;
  lastName: string;
  workplace: string;
  age: number;
  index: number;
};

export const EmployeeBox = ({
  id,
  firstName,
  lastName,
  age,
  workplace,
  index,
}: EmployeeBoxProps) => {
  const { deleteButton, curPage } = useContext(EmployeeContext);
  return (
    <tr>
      <td className="EmployeeList__employee_lp">
        {index + 1 + (curPage - 1) * 10}
      </td>
      <td className="EmployeeList__employee_id">{id}</td>
      <td className="EmployeeList__employee_firstName">{firstName}</td>
      <td className="EmployeeList__employee_lastName">{lastName}</td>
      <td className="EmployeeList__employee_age">{age}</td>
      <td className="EmployeeList__employee_workplace">{workplace}</td>
      <td className="EmployeeList__employee_delete_button">
        <button onClick={() => deleteButton(id)}>Delete</button>
      </td>
      <td>
        <button>
          <Link to={`/employeeList/${id}`}>Details</Link>
        </button>
      </td>
    </tr>
  );
};
