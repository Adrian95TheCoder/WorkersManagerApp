import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
export const DeleteButton = () => {
  const { employeeList, deleteButton } = useContext(EmployeeContext);

  //   const { id } = useParams();
  const [employee] = employeeList;
  console.log(employee.id, "id z buttona");
  return (
    <>
      <button onClick={() => deleteButton(employee.id)}>Delete employee</button>
    </>
  );
};
