import API from 'utils/config'
// import { combineData } from 'utils/service'
import { message } from 'antd'
import { getQsData } from '../../utils/service'


export const getQaLists = (params) => {
  return async dispatch => {
    try {

      dispatch({
        type: 'qaListsLoading',
        payload: true
      })
      const { page = 1, pageSize = 10, } = params
      const p = await getQsData(API.qaList, {
        ...params,
        page,
        pageSize
      })

      dispatch({
        type: 'qaListsLoading',
        payload: false
      })
      if (p.status) {
        dispatch({
          type: 'qaLists',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'qaListsLoading',
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

export const getTopicsLists = (params) => {
  return async dispatch => {
    try {

      dispatch({
        type: 'topicsLoading',
        payload: true
      })
      const { page = 1, pageSize = 10, } = params
      const p = await getQsData(API.qaTopics, {
        ...params,
        page,
        pageSize
      })

      dispatch({
        type: 'topicsLoading',
        payload: false
      })
      if (p.status) {
        dispatch({
          type: 'topicsLists',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'topicsLoading',
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

export const getQuestionLists = (params) => {
  return async dispatch => {
    try {

      dispatch({
        type: 'questionLoading',
        payload: true
      })
      const { page = 1, pageSize = 10, } = params
      const p = await getQsData(API.qaQuestion, {
        ...params,
        page,
        pageSize
      })

      dispatch({
        type: 'questionLoading',
        payload: false
      })
      if (p.status) {
        dispatch({
          type: 'questionLists',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'questionLoading',
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


