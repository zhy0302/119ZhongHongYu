 import axios from 'axios';
 import * as ActionType from '../ActionType';
{/*} const callServerApi=(endpoint,params)=>{
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

export default store=>next=>action=>{
  if(!action.SERVER_API){
      console.log('hhhhhh')
      return next(action);
  }
  const{
      type,
      url,
      params
  }=action.SERVER_API
  console.log(type)
  console.log(url)
  console.log(params)
   next({
         type: `${type}_REQ`,
       });
axios({
    method: 'POST',
    url,      
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
    data:params
  }).then(res => {
    console.log(res);
    next({
      type: `${type}_SUC`,
      data: res.data
    });
  })
  .catch(err => {
    console.log(err);
    next({
      type: `${type}_FAI`
    });
  });

//  axios({
//     method: 'POST',
//     url:"http://xly-wkop.xiaoniangao.cn/getLessonInfo",      
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
//       type: `${type}_FAI`,
//     });
//   });


  // axios({
  //   method: 'POST',
  //   url:"http://xly-wkop.xiaoniangao.cn/getStudentList",      
  //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
  //   data:params
  // }).then(res => {
  //   console.log(res);
  //   next({
  //     type: `${type}_SUC`,
  //     data: res.data
  //   });
  // })
  // .catch(err => {
  //   console.log(err);
  //   next({
  //     type: `${type}_FAI`,
  //   });
  // });

  // axios({
  //   method: 'POST',
  //   url:"http://xly-wkop.xiaoniangao.cn/getClassInfo",      
  //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
  //   data:params
  // }).then(res => {
  //   console.log(res);
  //   next({
  //     type: `${type}_SUC`,
  //     data: res.data
  //   });
  // })
  // .catch(err => {
  //   console.log(err);
  //   next({
  //     type: `${type}_FAI`,
  //   });
  // });
 };
 
 
