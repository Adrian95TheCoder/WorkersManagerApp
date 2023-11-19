import { Link } from "react-router-dom";
import { useContext } from "react";

import { EmployeeContext } from "../context/EmployeeContext";

import { DetailsButton } from "../DetailsButton";
type EmployeeBoxProps = {
  id: number;
  firstName: string;
  lastName: string;
  workplace: string;
  salary: number;
  index: number;
};

export const EmployeeBox = ({
  id,
  firstName,
  lastName,
  salary,
  workplace,
  index,
}: EmployeeBoxProps) => {
  //   const { id } = useParams();
  const { curPage } = useContext(EmployeeContext);
  return (
    <tr>
      <td className="EmployeeList__employee_lp">
        {index + 1 + (curPage - 1) * 10}
      </td>
      <td className="EmployeeList__employee_id">{id}</td>
      <td className="EmployeeList__employee_firstName">{firstName}</td>
      <td className="EmployeeList__employee_lastName">{lastName}</td>
      <td className="EmployeeList__employee_workplace">{workplace}</td>
      <td className="EmployeeList__employee_age">{salary}</td>
      <td className="EmployeeList__details">
        <button>
          {/* <Link to={`/employeeList/${id}`}>Details</Link> */}
          <DetailsButton id={id} />
        </button>
      </td>
    </tr>
  );
};
