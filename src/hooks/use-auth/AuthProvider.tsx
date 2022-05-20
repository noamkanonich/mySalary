import React, { ReactNode, useState } from 'react'
import AuthContext from './AuthContext'
import IUser from './IUser'

interface IAuthProvider {
    children: ReactNode
}

const ExpansesProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | undefined>()
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default ExpansesProvider