import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { State, ContextType, Action } from "../types/types";

const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGitHub,
}

const FormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGitHub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

export const FormProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(FormReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm precisa de ser usado dentro do FormProvider");
  }

  return context;
};
