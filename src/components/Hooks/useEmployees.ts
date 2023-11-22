import { employeeListType } from "../context/EmployeeContext";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
type useEmployeesData = {
  employeeList: employeeListType[];
  count: number;
  newEmployeeInputValue: {
    id: number;
    firstName: string;
    lastName: string;
    salary: number;
    workplace: string;
    // new
    gender: string;
    email: string;
    phone: string;
    birthDate: string;
    street: string;
    city: string;
    postalCode: string;
    state: string;
    startWork: string;
  };
  inputValue: string;
  displayNumber: string;
  sortValue: string;
  curPage: number;
  allowDelete: boolean;
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
  nextPage: () => void;
  previousPage: () => void;
  handleDisplay: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleSortDisplay: (event: ChangeEvent<HTMLSelectElement>) => void;
  setAllowDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useEmployees = (): useEmployeesData => {
  const [employeeList, setEmployeeList] = useState<employeeListType[]>([]);
  const [count, setCount] = useState(employeeList.length);
  const [newEmployeeInputValue, setNewInputValue] = useState<employeeListType>({
    id: count,
    firstName: "",
    lastName: "",
    workplace: "",
    salary: 0,
    // new
    gender: "",
    email: "",
    phone: "",
    birthDate: "",
    street: "",
    city: "",
    postalCode: "",
    state: "",
    startWork: "",
  });
  const [curPage, setCurPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [displayNumber, setDisplayNumber] = useState("10");
  const [allowDelete, setAllowDelete] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [maxPage, setMaxPage] = useState(1);

  // const [employee, setEmployee] = useState({
  //   id: 0,
  //   firstName: "",
  //   lastName: "",
  //   workplace: "",
  //   age: 0,
  //   // new
  //   gender: "",
  //   email: "",
  //   phone: "",
  //   birthDate: "",
  //   address: "",
  //   city: "",
  //   postalCode: "",
  //   state: "",
  //   startWork: "",
  // } as employeeListType);

  const {
    firstName,
    lastName,
    workplace,
    salary,
    gender,
    email,
    phone,
    birthDate,
    street,
    city,
    postalCode,
    state,
    startWork,
  } = newEmployeeInputValue;

  const getWorkers = async () => {
    const limit = parseInt(displayNumber);
    try {
      const data = await fetch(
        `http://localhost:5000/workers/?_page=${curPage}&_limit=${displayNumber}&${sortValue}&q=${inputValue}&limit=${limit}`
      );
      if (!data.ok) throw new Error("Something goes wrong");
      const employees = await data.json();
      const countPage = data.headers.get("X-Total-Count");
      console.log(countPage, "ilość stron");
      if (countPage) setMaxPage(Math.ceil(Number(countPage) / limit));

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
          salary,
          gender,
          email,
          phone,
          birthDate,
          street,
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
    if (employeeId < 1000000) {
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
        salary: 0,
        // new
        gender: "",
        email: "",
        phone: "",
        birthDate: "",
        street: "",
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
      salary,
      gender,
      email,
      phone,
      birthDate,
      street,
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
          salary,
          gender,
          email,
          phone,
          birthDate,
          street,
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
    if (curPage !== 1) setCurPage(1);
    setInputValue(event.target.value);
  };

  const nextPage = () => {
    if (maxPage > curPage) setCurPage((prev) => prev + 1);
  };

  const previousPage = () => {
    setCurPage((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const handleDisplay = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setDisplayNumber(value);
  };
  const handleSortDisplay = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortValue(value);
  };
  useEffect(() => {
    getWorkers();
  }, [count, displayNumber, sortValue, inputValue, curPage]);

  return {
    employeeList,
    count,
    newEmployeeInputValue,
    inputValue,
    displayNumber,
    sortValue,
    curPage,
    allowDelete,
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
    nextPage,
    previousPage,
    handleDisplay,
    handleSortDisplay,
    setAllowDelete,
  };
};
