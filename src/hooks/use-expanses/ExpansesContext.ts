import { createContext } from "react";

interface IExpansesContext {
  totalExpanses: string | number | undefined;
  setTotalExpanses: (value: string | number) => void;
}

const ExpansesContext = createContext<IExpansesContext>({} as IExpansesContext);

export default ExpansesContext;
