import { ReactNode, useState } from 'react'
import AppContext from '../context'
import { appContextDefaultValues } from '../context/types'

type Props = {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  const [apiResults, setApiResults] = useState(appContextDefaultValues.results)
  const [isLoading, setLoading] = useState(false)

  const updateResults = (apiResults: any) => {
    setApiResults(apiResults)
  }
  const value = {
    ...appContextDefaultValues,
    updateResults: updateResults,
    results: apiResults,
    loading: isLoading,
    setLoading: setLoading,
  }
  return (
    <>
      <AppContext.Provider value={value}> {children}</AppContext.Provider>
    </>
  )
}
