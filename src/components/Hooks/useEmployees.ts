import { employeeListType } from "../context/EmployeeContext";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
type useEmployeesData = {
  employeeList: employeeListType[];
  count: number;
  newFirstName: string;
  newLastName: string;
  newWorkplace: string;
  newAge: string;
  setNewFirstName: React.Dispatch<React.SetStateAction<string>>;
  setNewLastName: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setEmployeeList: React.Dispatch<React.SetStateAction<employeeListType[]>>;
  setNewAge: (value: React.SetStateAction<string>) => void;
  getWorkers: () => Promise<void>;
  addEmployee: () => Promise<any>;
  handleSubmitEmployee: (event: FormEvent<HTMLFormElement>) => void;
  handleLastName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFirstName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleWorkplace: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAge: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const useEmployees = (): useEmployeesData => {
  const [employeeList, setEmployeeList] = useState<employeeListType[]>([]);
  const [count, setCount] = useState(employeeList.length);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newWorkplace, setNewWorkplace] = useState("");
  const [newAge, setNewAge] = useState("");
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

  const addEmployee = async () => {
    try {
      const data = await fetch(`http://localhost:5000/workers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: count,
          firstName: newFirstName,
          lastName: newLastName,
          workplace: newWorkplace,
          age: newAge,
        }),
      });
      if (!data.ok) throw new Error("ups");
      const response = await data.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const handleFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewFirstName(event.target.value);
  };
  const handleLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewLastName(event.target.value);
  };
  const handleWorkplace = (event: ChangeEvent<HTMLInputElement>) => {
    setNewWorkplace(event.target.value);
  };
  const handleAge = (event: ChangeEvent<HTMLInputElement>) => {
    setNewAge(event.target.value);
  };
  const handleSubmitEmployee = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newFirstName.length > 3 && newLastName.length > 3) {
      setCount((prev) => prev + 1);

      const newEmployee = {
        id: count,
        firstName: newFirstName,
        lastName: newLastName,
        workplace: newWorkplace,
        age: newAge,
      };
      setEmployeeList((prev) => [...prev, newEmployee]);
      addEmployee();

      setNewFirstName("");
      setNewLastName("");
      setNewWorkplace("");
      setNewAge("");
    } else {
      alert("Name or last name is to short");
    }
  };
  useEffect(() => {
    getWorkers();
  }, [setEmployeeList, setCount, count]);

  return {
    employeeList,
    count,
    newFirstName,
    newLastName,
    newWorkplace,
    newAge,
    setNewFirstName,
    setNewLastName,
    setCount,
    setEmployeeList,
    getWorkers,
    addEmployee,
    handleSubmitEmployee,
    handleLastName,
    handleFirstName,
    handleWorkplace,
    handleAge,
    setNewAge,
  };
};
