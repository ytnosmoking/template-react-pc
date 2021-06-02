import API from 'utils/config'
// import { combineData } from 'utils/service'
import { message } from 'antd'
import { getData, getQsData } from '../../utils/service'



export const getCategory = () => {
  return async dispatch => {
    try {
      const p = await getData(API.docCategory)
      console.log(p)
      if (p.status) {

        dispatch({
          type: 'docCategory',
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

export const getDocList = (params) => {
  return async dispatch => {
    try {

      dispatch({
        type: 'docListLoading',
        payload: true
      })
      const { page = 1, pageSize = 10, } = params
      const p = await getQsData(API.docList, {
        ...params,
        page,
        pageSize
      })

      dispatch({
        type: 'docListLoading',
        payload: false
      })
      if (p.status) {
        dispatch({
          type: 'docList',
          payload: p.result
        })
      } else {
        message.error(p.msg)
      }

    } catch (error) {
      dispatch({
        type: 'docListLoading',
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


