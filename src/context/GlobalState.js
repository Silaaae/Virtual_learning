import React, { createContext, useReducer } from 'react';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const initialState = {
  user: null,
  courses: [],
  quizProgress: {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'SET_COURSES':
      return { ...state, courses: action.payload };
    case 'UPDATE_QUIZ_PROGRESS':
      return { ...state, quizProgress: action.payload };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(GlobalStateContext);
export const useGlobalDispatch = () => React.useContext(GlobalDispatchContext);
