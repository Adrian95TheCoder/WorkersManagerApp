import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";

type deleteProps = {
  id: number;
};
export const DeleteButton = ({ id }: deleteProps) => {
  const { setAllowDelete } = useContext(EmployeeContext);

  console.log(id, "id z buttona");
  return (
    <>
      <button onClick={() => setAllowDelete(true)}>Delete employee</button>
    </>
  );
};
