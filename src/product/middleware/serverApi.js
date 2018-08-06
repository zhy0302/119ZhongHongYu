import axios from 'axios';
const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';
const callServerApi = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: API_DOMAIN + endpoint,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params
    }).then(res => {
      if (res.data.ret === 1) {
        return resolve(res.data.data);
      }
      return reject({ errMsg: res.data.errMsg });
    }).catch(err => {
      return reject({ errMsg: JSON.stringify(err) });
    });
  });
}

export default store => next => action => {
  if (!action.SERVER_API) {
    return next(action);
  }
  const {
    type,
    endpoint,
    params,
  } = action.SERVER_API;

  if (typeof type !== 'string') {
    throw new Error('type shoudle be a string');
  }
  if (typeof endpoint !== 'string') {
    throw new Error('endpoint shoudle be a string');
  }
  if (typeof params !== 'object') {
    throw new Error('params shoudle be a object');
  }

  next({
    type: `${type}_REQ`
  });

  return callServerApi(endpoint, params)
    .then(response => {
      next({
        type: `${type}_SUC`,
        response
      });
    }).catch(err => {
      next({
        type: `${type}_FAI`,
        errMsg: err.errMsg
      });
    });
};


{/* import axios from 'axios';
 import * as ActionType from '../ActionType';
} const callServerApi=(endpoint,params)=>{
//   axios({
//     method: 'POST',
//     url:"http://xly-wkop.xiaoniangao.cn/getUserInfo",      
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
//     data:params
//   }).then(res => {
//     console.log(res);
//     next({
//       type: `${type}_SUC`,
//       data: res.data
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     next({
//       type: `${type}_FAI`
//     });
//   });
// }
// export default store=>next=>action=>{
//     if(!action.SERVER_API){
//         console.log('hhhhhh')
//         return next(action);
//     }
//     const{
//         type,
//         url,
//         params
//     }=action.SERVER_API
//     console.log(type)
//     console.log(url)
//     console.log(params)
//     if(typeof type!='string')
//     {throw newError("type should be a string")};
//     if(typeof endpoint!='string')
//     {throw newError("type should be a string")};
//     if(typeof params!='string')
//     {throw newError("type should be a string")};
//     return callServerApi(endpoint,params)
//     .then(res => {
//     console.log(res);
//     next({
//       type: `${type}_SUC`,
//       data: res.data
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     next({
//       type: `${type}_FAI`
//     });
//   });*/}
