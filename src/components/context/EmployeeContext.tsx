import { createContext, ChangeEvent, FormEvent } from "react";
import { useEmployees } from "../Hooks/useEmployees";

export type employeeListType = {
  id: number;
  firstName: string;
  lastName: string;
  workplace: string;
  age: number;
};

type EmployeeContextProps = {
  employeeList: employeeListType[];
  count: number;
  newEmployeeInputValue: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    workplace: string;
  };
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setEmployeeList: React.Dispatch<React.SetStateAction<employeeListType[]>>;
  getWorkers: () => Promise<void>;
  addEmployee: () => Promise<any>;
  setNewInputValue: React.Dispatch<React.SetStateAction<employeeListType>>;
  deleteButton: (employeeId: number) => Promise<void>;
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewEmployee: (
    event: FormEvent<HTMLFormElement>,
    userId: number
  ) => void;
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
    setCount,
    setEmployeeList,
    getWorkers,
    addEmployee,
    deleteButton,
    handleInputValue,
    handleNewEmployee,
    setNewInputValue,
    newEmployeeInputValue,
  } = useEmployees();

  return (
    <EmployeeContext.Provider
      value={{
        employeeList,
        count,
        newEmployeeInputValue,
        setCount,
        setEmployeeList,
        getWorkers,
        addEmployee,
        deleteButton,
        handleInputValue,
        handleNewEmployee,
        setNewInputValue,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
