import API from 'utils/config'
import { getQsData, getData } from 'utils/service'
import { message } from 'antd'



export const getNewsChannel = (params) => {
  return async dispatch => {
    try {
      const p = await getData(API.newsChannel)
      console.log(p)
      if (p.status) {

        dispatch({
          type: 'newsChannel',
          payload: p.result
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

export const getNewsinfoLists = (params) => {
  const { page = 1, pageSize = 10, channel, startTime, endTime, search } = params
  return async dispatch => {
    try {
      dispatch({
        type: 'infoLoading',
        payload: true
      })
      const p = await getQsData(API.infoIndex, {
        catalogId: channel,
        startTime,
        endTime,
        title: search,
        page,
        pageSize
      })
      dispatch({
        type: 'infoLoading',
        payload: false
      })
      if (p.status) {

        dispatch({
          type: 'infoLists',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }
      console.log(p)
    } catch (error) {
      dispatch({
        type: 'infoLoading',
        payload: false
      })
      console.log(error)
    }
  }
}



export const getInfoCommentList = (params) => {
  const { page = 1, pageSize = 10 } = params
  return async dispatch => {
    try {
      dispatch({
        type: 'infoCommentLoading',
        payload: true
      })
      const p = await getQsData(API.infoComment, {
        ...params,
        page,
        pageSize,
        desc: "create_at"
      })
      console.log(p)
      dispatch({
        type: 'infoCommentLoading',
        payload: false
      })
      if (p.status) {

        dispatch({
          type: 'infoCommentLists',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'infoCommentLoading',
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