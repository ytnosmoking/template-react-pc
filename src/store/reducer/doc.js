const defaultState = {
  docListLoading: false,
  docList: {
    current: "0",
    pages: "0",
    records: [],
    searchCount: true,
    size: "10",
    total: "0",
  },
  docCategory: [],


  organizeLoading: true,
  organizeLists: {
    current: "0",
    pages: "0",
    records: [],
    searchCount: true,
    size: "10",
    total: "0",
  },

  tree: [],
  treeKeys: [],

  systemLoading: true,
  systemLists: {
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
  if (type === 'docCategory') {
    return {
      ...state, docCategory: payload
    }
  }
  if (type === 'docListLoading') {
    return {
      ...state,
      docListLoading: payload,
    }
  }
  if (type === 'docList') {
    return {
      ...state, docList: payload
    }
  }

  if (type === 'organizeList') {
    return {
      ...state, organizeLists: payload
    }
  }
  if (type === 'systemList') {
    return {
      ...state, systemLists: payload
    }
  }
  if (type === 'manageLoading') {
    return {
      ...state,
      manageLoading: payload,
    }
  }

  if (type === 'organizeLoading') {
    return {
      ...state,
      organizeLoading: payload,
    }
  }

  if (type === 'systemLoading') {
    return {
      ...state,
      systemLoading: payload,
    }
  }
  if (type === 'treeKeys') {
    return {
      ...state,
      treeKeys: [...state.treeKeys, payload]
    }
  }
  if (type === 'commonTree') {
    console.log(payload)
    const { key, list } = payload

    if (key / 1 !== -1) {
      const datas = list[0]
      console.log(datas)
      const generateTree = (arr = [], s) => {
        return arr.map(item => {
          if (item.id / 1 === key) {
            return s
          }

          if (item.nodes && item.nodes.length > 0) {
            return {
              ...item,
              nodes: generateTree(item.nodes, s)
            }
          }

          return item
        })
      }
      const tree = generateTree(state.tree, datas)
      console.log(tree)
      return {
        ...state,
        tree
      }
    } else {
      return {
        ...state,
        tree: list
      }
    }



  }



  return state
}

export default reducer