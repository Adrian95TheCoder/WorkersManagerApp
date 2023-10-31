import { employeeListType } from "../context/EmployeeContext";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
type useEmployeesData = {
  employeeList: employeeListType[];
  count: number;
  newFirstName: string;
  newLastName: string;
  setNewFirstName: React.Dispatch<React.SetStateAction<string>>;
  setNewLastName: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setEmployeeList: React.Dispatch<React.SetStateAction<employeeListType[]>>;
  getWorkers: () => Promise<void>;
  addEmployeer: () => Promise<any>;
  handleSubmitEmployee: (event: FormEvent<HTMLFormElement>) => void;
  handleLastName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFirstName: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const useEmployees = (): useEmployeesData => {
  const employeer = {
    id: 0,
    firstName: "",
    lastName: "",
    workplace: "",
    age: "",
  };
  const [count, setCount] = useState(5);
  const [employeeList, setEmployeeList] = useState<employeeListType[]>([]);

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
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
  const addEmployeer = async () => {
    try {
      const data = await fetch(``, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeer,
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
  const handleSubmitEmployee = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newFirstName.length > 3 && newLastName.length) {
      setCount((prev) => prev + 1);

      const newEmployee = {
        id: `${count}`,
        firstName: newFirstName,
        lastName: newLastName,
      };

      addEmployeer();
      setEmployeeList([]);
      console.log("dodano pracownika");
    } else {
      alert("imie lub nazwisko za krótkie");
    }
  };
  return {
    employeeList,
    count,
    newFirstName,
    newLastName,
    setNewFirstName,
    setNewLastName,
    setCount,
    setEmployeeList,
    getWorkers,
    addEmployeer,
    handleSubmitEmployee,
    handleLastName,
    handleFirstName,
  };
};
