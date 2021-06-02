import API from 'utils/config'
// import { combineData } from 'utils/service'
import { message } from 'antd'
import { getQsData } from '../../utils/service'


export const getCirclesManage = (params) => {
  return async dispatch => {
    try {

      dispatch({
        type: 'mamageLoading',
        payload: true
      })
      const { page = 1, pageSize = 10, } = params
      const p = await getQsData(API.circleManage, {
        ...params,
        page,
        pageSize
      })

      dispatch({
        type: 'mamageLoading',
        payload: false
      })
      if (p.status) {
        dispatch({
          type: 'manageList',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'mamageLoading',
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

export const getCirclesHistory = (params) => {
  return async dispatch => {
    try {

      dispatch({
        type: 'historyLoading',
        payload: true
      })
      const { page = 1, pageSize = 10, } = params
      const p = await getQsData(API.circleManage, {
        ...params,
        page,
        pageSize
      })

      dispatch({
        type: 'historyLoading',
        payload: false
      })
      if (p.status) {
        dispatch({
          type: 'historyList',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'historyLoading',
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




