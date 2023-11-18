import { Link } from "react-router-dom";
import { useContext } from "react";

import { EmployeeContext, employeeListType } from "../context/EmployeeContext";
type EmployeeBoxProps = employeeListType;

export const EmployeeBox = ({
  id,
  firstName,
  lastName,
  age,
  workplace,
}: EmployeeBoxProps) => {
  const { deleteButton } = useContext(EmployeeContext);
  return (
    <div>
      {" "}
      <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>{workplace}</td>
        <td>
          <button onClick={() => deleteButton(id)}>Delete</button>
        </td>
        <td>
          <button>
            <Link to={`/employeeList/${id}`}>Details</Link>
          </button>
        </td>
      </tr>
    </div>
  );
};
