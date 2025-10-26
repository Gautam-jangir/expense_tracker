import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
  transcations: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTranscation(id) {
    dispatch({
      type: 'DELETE_TRANSCATION',
      payload: id
    })
  }

  function addTranscation(transaction) {
    dispatch({
      type: 'ADD_TRANSCATION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider value={{
      transcations: state.transcations,
      deleteTranscation,
      addTranscation
    }}>
      {children}
    </GlobalContext.Provider>
  )

}