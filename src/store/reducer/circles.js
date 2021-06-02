const defaultState = {
  mamageLoading: false,
  manageList: {
    current: "0",
    pages: "0",
    records: [],
    searchCount: true,
    size: "10",
    total: "0",
  },
  historyLoading: false,
  historyList: {
    current: "0",
    pages: "0",
    records: [],
    searchCount: true,
    size: "10",
    total: "0",
  },

}




const reducer = (state = defaultState, action) => {
  const { type, payload } = action

  if (type === 'mamageLoading') {
    return {
      ...state,
      mamageLoading: payload,
    }
  }
  if (type === 'manageList') {
    return {
      ...state, manageList: payload
    }
  }
  if (type === 'historyLoading') {
    return {
      ...state,
      historyLoading: payload,
    }
  }
  if (type === 'historyList') {
    return {
      ...state, historyList: payload
    }
  }




  return state
}

export default reducer