import { createContext, ChangeEvent, FormEvent } from "react";
import { useEmployees } from "../Hooks/useEmployees";

export type employeeListType = {
  id: number;
  firstName: string;
  lastName: string;
  workplace: string;
  age: string;
};

type EmployeeContextProps = {
  employeeList: employeeListType[];
  count: number;
  newFirstName: string;
  newLastName: string;
  newWorkplace: string;
  newAge: string;
  setNewAge: (value: React.SetStateAction<string>) => void;
  setNewFirstName: React.Dispatch<React.SetStateAction<string>>;
  setNewLastName: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setEmployeeList: React.Dispatch<React.SetStateAction<employeeListType[]>>;
  getWorkers: () => Promise<void>;
  addEmployee: () => Promise<any>;
  handleSubmitEmployee: (event: FormEvent<HTMLFormElement>) => void;
  handleLastName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFirstName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleWorkplace: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAge: (event: ChangeEvent<HTMLInputElement>) => void;
};

type EmployeeProviderProps = {
  children: JSX.Element;
};

export const EmployeeContext = createContext<EmployeeContextProps>(
  {} as EmployeeContextProps
);

export const EmployeePovider = ({ children }: EmployeeProviderProps) => {
  const {
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
  } = useEmployees();

  return (
    <EmployeeContext.Provider
      value={{
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
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
