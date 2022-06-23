import React, { createContext, useContext } from 'react'
import { appContextType, appContextDefaultValues } from './types'

const AppContext = createContext<appContextType>(appContextDefaultValues)

export default AppContext

export function useAppContext() {
  return useContext(AppContext)
}
