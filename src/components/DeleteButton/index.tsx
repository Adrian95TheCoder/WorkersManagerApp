import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";
import "./DeleteButton.scss"

type deleteProps = {
  id: number;
};
export const DeleteButton = ({ id }: deleteProps) => {
  const { setAllowDelete } = useContext(EmployeeContext);

  console.log(id, "id z buttona");
  return (
    <>
      <button className="deleteButton__deleteEmployee" onClick={() => setAllowDelete(true)}>Delete employee</button>
    </>
  );
};
