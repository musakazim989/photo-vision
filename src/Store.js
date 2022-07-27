import { createContext, useReducer } from "react"

const Store = createContext()

const initialState = {
  items: [],
}

function reducer(state, action) {
  switch (action.type) {
    case "UPLOAD_DATA":
      return { ...state }
    default:
      return state
  }
}

const StoreProvider = (props) => {
  const [data, dataDispatch] = useReducer(reducer, initialState)
  const value = { data, dataDispatch }

  return <Store.Provider value={value}>{props.children}</Store.Provider>
}

export { Store, StoreProvider }
