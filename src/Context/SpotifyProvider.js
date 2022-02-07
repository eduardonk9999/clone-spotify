import { createContext, useContext, useReducer } from "react";


export const SpotfyContext = createContext();

export const SpotifyProvider = ({children, reducer, initialState}) => {
  return(
    <SpotfyContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </SpotfyContext.Provider>
  )
}

export const useSpotifyValues = () => useContext(SpotfyContext);