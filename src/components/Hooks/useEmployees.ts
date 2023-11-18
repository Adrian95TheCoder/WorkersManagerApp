import { employeeListType } from "../context/EmployeeContext";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
type useEmployeesData = {
  employeeList: employeeListType[];
  count: number;
  newEmployeeInputValue: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    workplace: string;
    // new
    gender: string;
    email: string;
    phone: string;
    birthDate: string;
    address: string;
    city: string;
    postalCode: string;
    state: string;
    startWork: string;
  };
  inputValue: string;
  setNewInputValue: React.Dispatch<React.SetStateAction<employeeListType>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setEmployeeList: React.Dispatch<React.SetStateAction<employeeListType[]>>;
  getWorkers: () => Promise<void>;
  addEmployee: () => Promise<any>;
  editEmployee: (employee: employeeListType) => Promise<void>;
  deleteButton: (employeeId: number) => Promise<void>;
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewEmployee: (
    event: FormEvent<HTMLFormElement>,
    userId: number
  ) => void;
  handleEditEmployee: (
    event: FormEvent<HTMLFormElement>,
    employee: employeeListType
  ) => void;
  /* search */
  handleInputSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const useEmployees = (): useEmployeesData => {
  const [employeeList, setEmployeeList] = useState<employeeListType[]>([]);
  const [count, setCount] = useState(employeeList.length);
  const [newEmployeeInputValue, setNewInputValue] = useState<employeeListType>({
    id: count,
    firstName: "",
    lastName: "",
    workplace: "",
    age: 0,
    // new
    gender: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    city: "",
    postalCode: "",
    state: "",
    startWork: "",
  });

  const [inputValue, setInputValue] = useState("");
  /*
  const [employee, setEmployee] = useState<employeeListType>({
    id: 0,
    firstName: "",
    lastName: "",
    workplace: "",
    age: 0,
    // new
    gender: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    city: "",
    postalCode: "",
    state: "",
    startWork: "",
  });
  */
  const {
    firstName,
    lastName,
    workplace,
    age,
    gender,
    email,
    phone,
    birthDate,
    address,
    city,
    postalCode,
    state,
    startWork,
  } = newEmployeeInputValue;

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
    setCount((prev) => prev + 1);
    try {
      const data = await fetch(`http://localhost:5000/workers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          workplace,
          age,
          gender,
          email,
          phone,
          birthDate,
          address,
          city,
          postalCode,
          state,
          startWork,
        }),
      });
      if (!data.ok) throw new Error("ups");
      const response = await data.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteButton = async (employeeId: number) => {
    if (employeeId <= 1000000000) {
      try {
        const data = await fetch(
          `http://localhost:5000/workers/${employeeId}`,
          {
            method: "DELETE",
          }
        );
        console.log(employeeId, " nie ma id");
        if (!data.ok)
          throw new Error("Something went wrong while deleting user");
        const deleteData = await data.json();
        alert("employee was deleted");
        //console.log(deleteData, "zczxc");
        //console.log(employeeList, "lista po usunięciu pracownika");
        // console.log( "usuwa pracownika");
      } catch (error) {
        console.log(error);
      }
      setEmployeeList((prev) =>
        prev.filter((employees) => employees.id !== employeeId)
      );
    }
  };

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleNewEmployee = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      newEmployeeInputValue.firstName.length > 3 &&
      newEmployeeInputValue.lastName.length > 3
    ) {
      const newEmployee = await addEmployee();

      setEmployeeList((prev) => [...prev, newEmployee]);
      setNewInputValue({
        id: 0,
        firstName: "",
        lastName: "",
        workplace: "",
        age: 0,
        // new
        gender: "",
        email: "",
        phone: "",
        birthDate: "",
        address: "",
        city: "",
        postalCode: "",
        state: "",
        startWork: "",
      });
    } else alert(` too short`);
  };
  useEffect(() => {
    getWorkers();
  }, [count]);

  const handleEditEmployee = async (
    event: FormEvent<HTMLFormElement>,
    employee: employeeListType
  ) => {
    event.preventDefault();

    const changedEmployee = await editEmployee(employee);
    //console.log("firstName in handleEditEmployee:", employee.firstName);
  };

  const editEmployee = async (currentEmployee: employeeListType) => {
    const {
      id,
      firstName,
      lastName,
      workplace,
      age,
      gender,
      email,
      phone,
      birthDate,
      address,
      city,
      postalCode,
      state,
      startWork,
    } = currentEmployee;
    //console.log("1: firstName in editEmployee:", firstName);

    try {
      //console.log("2: firstName in editEmployee:", firstName);
      const data = await fetch(`http://localhost:5000/workers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          workplace,
          age,
          gender,
          email,
          phone,
          birthDate,
          address,
          city,
          postalCode,
          state,
          startWork,
        }),
      });
      if (!data.ok) throw new Error("ups");
      const response = await data.json();
      return response;
    } catch (error) {
      console.log(error);
    }

    //console.log("firstName in editEmployee:", firstName);
    //console.log("currentEmployee", currentEmployee);
  };

  /* search  */
  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    //console.log("Search changed");
    setInputValue(event.target.value);
  };

  return {
    employeeList,
    count,
    newEmployeeInputValue,
    inputValue,
    setCount,
    setEmployeeList,
    getWorkers,
    addEmployee,
    editEmployee,
    deleteButton,
    handleInputValue,
    handleNewEmployee,
    handleEditEmployee,
    setNewInputValue,
    handleInputSearch,
    setInputValue,
  };
};
