import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type employeeListType = {
  id: number;
  firstName: string;
  lastName: string;
  workplace: string;
  age: number;
};
export const EmployeeList = () => {
  //   const { employees } = useContext(EmployeeContext);
  const [employeeList, setEmployeeList] = useState<employeeListType[]>([]);

  const getWorkers = async () => {
    try {
      const data = await fetch("http://localhost:5000/workers");
      if (!data.ok) throw new Error("Something goes wrong");
      const employees = await data.json();
      console.log(employees, " pobrano dane pracownika");
      setEmployeeList(employees);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWorkers();
  }, []);
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
