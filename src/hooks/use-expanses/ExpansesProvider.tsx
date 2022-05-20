import React, { ReactNode, useState } from 'react'
import ExpansesContext from './ExpansesContext'

interface IExpansesProvider {
    children: ReactNode
}

const ExpansesProvider = ({children}: IExpansesProvider) => {
    const [totalExpanses, setTotalExpanses] = useState<string | number | undefined>()
  return (
    <ExpansesContext.Provider value={{totalExpanses, setTotalExpanses}}>
      {children}
    </ExpansesContext.Provider>
  )
}

export default ExpansesProvider