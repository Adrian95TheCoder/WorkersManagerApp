import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
type deleteProps = {
  id: number;
};
export const DeleteButton = ({ id }: deleteProps) => {
  const { deleteButton, setAllowDelete } = useContext(EmployeeContext);

  const navigate = useNavigate();
  const employeeListNavigation = () => {
    navigate(`/employees`);
  };
  console.log(id, "id z buttona");
  return (
    <>
      <button onClick={() => setAllowDelete(true)}>Delete employee</button>
    </>
  );
};
