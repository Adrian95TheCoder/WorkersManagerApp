import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
type deleteProps = {
  id: number;
};
export const DeleteButton = ({ id }: deleteProps) => {
  const { deleteButton } = useContext(EmployeeContext);

  //   const { id } = useParams();

  console.log(id, "id z buttona");
  return (
    <>
      <button onClick={() => deleteButton(id)}>Delete employee</button>
    </>
  );
};
