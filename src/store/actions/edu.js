import API from 'utils/config'
import { combineData } from 'utils/service'
import { message } from 'antd'
import { postData } from '../../utils/service'



export const getColumnList = (params) => {
  const { page = 1, pageSize = 10 } = params
  return async dispatch => {
    try {
      dispatch({
        type: 'organizeLoading',
        payload: true
      })
      const p = await combineData(API.eduChannels, {
        query: {
          page,
          pageSize
        }, data: params
      })
      console.log(p)
      dispatch({
        type: 'organizeLoading',
        payload: false
      })
      if (p.status) {

        dispatch({
          type: 'columnList',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'organizeLoading',
        payload: false
      })
      const is400 = error.toString().includes('400');
      if (is400) {
        console.log('eee')
        message.error('账号或密码错误....');
      } else {
        message.error('其他错误....');
      }
    }
  }
}

export const getEduTableList = (params) => {
  return async dispatch => {
    try {

      dispatch({
        type: 'manageLoading',
        payload: true
      })
      const { page = 1, pageSize = 10, } = params
      const p = await combineData(API.eduContList, {
        query: {
          page,
          pageSize
        }, data: { ...params, columnType: 0 }
      })
      dispatch({
        type: 'manageLoading',
        payload: false
      })

      if (p.status) {
        dispatch({
          type: 'eduTableList',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'manageLoading',
        payload: false
      })
      const is400 = error.toString().includes('400');
      if (is400) {
        console.log('eee')
        message.error('账号或密码错误....');
      } else {
        message.error('其他错误....');
      }
    }


  }
}


export const getTree = ({ level = 2, id = -1, type = 100471 }) => {
  return async dispatch => {
    try {
      const p = await postData(API.tree, { level, id, type })
      console.log(p)
      if (p.status) {

        dispatch({
          type: 'commonTree',
          payload: { key: id, list: p.result }
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      const is400 = error.toString().includes('400');
      if (is400) {
        console.log('eee')
        message.error('账号或密码错误....');
      } else {
        message.error('其他错误....');
      }
    }
  }
}


export const getOrganizeList = (params) => {
  const { page = 1, pageSize = 10 } = params
  return async dispatch => {
    try {
      dispatch({
        type: 'organizeLoading',
        payload: true
      })
      const p = await combineData(API.eduChannels, {
        query: {
          page,
          pageSize
        }, data: params
      })
      console.log(p)
      dispatch({
        type: 'organizeLoading',
        payload: false
      })
      if (p.status) {

        dispatch({
          type: 'organizeList',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'organizeLoading',
        payload: false
      })
      const is400 = error.toString().includes('400');
      if (is400) {
        console.log('eee')
        message.error('账号或密码错误....');
      } else {
        message.error('其他错误....');
      }
    }
  }
}


export const getSystemList = (params) => {
  const { page = 1, pageSize = 10 } = params
  return async dispatch => {
    try {
      dispatch({
        type: 'systemLoading',
        payload: true
      })
      const p = await combineData(API.eduChannels, {
        query: {
          page,
          pageSize
        }, data: params
      })
      console.log(p)
      dispatch({
        type: 'systemLoading',
        payload: false
      })
      if (p.status) {

        dispatch({
          type: 'systemList',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'systemLoading',
        payload: false
      })
      const is400 = error.toString().includes('400');
      if (is400) {
        console.log('eee')
        message.error('账号或密码错误....');
      } else {
        message.error('其他错误....');
      }
    }
  }
}