import { createContext, useState } from "react";

interface RepositoryContextData {
  repository: string;
  setRepository: (repository: string) => void;
}

export const RepositoryContext = createContext({} as RepositoryContextData);

interface RepositoryContextProviderProps {
  children: React.ReactNode;
}

export default function RepositoryContextProvider( { children }: RepositoryContextProviderProps) {
  
  const [ repository, setRepository ] = useState('');
  
  return (
    <RepositoryContext.Provider
      value={{
        repository,
        setRepository
      }}
    >
      { children }
    </RepositoryContext.Provider>
  )
}