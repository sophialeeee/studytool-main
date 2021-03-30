import {request} from './request';

// const url = 'http://127.0.0.1:4000/'
const url = 'http://121.199.9.36:4000/'
// const url = 'http://47.95.145.72:4000/'

export const loginAPI = {
  getToken: () => {
    return request({
     url: `${url}getToken`
    });
  },
  signUp: (token: string, data: string) => {
    return request({
      // url: 'http://47.95.145.72:4000/signUp',
      url:`${url}signUp`,
      headers: { authorization: token},
      data: {
        data
      },
    })
  },
  signIn: (token: string, data: string) => {
    return request({
      // url: 'http://47.95.145.72:4000/signIn',
      url:`${url}signIn`,
      headers: { authorization: token},
      data: {
        data
      },
    })
  }
};
