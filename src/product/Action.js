import axios from 'axios';
 import * as ActionType from './ActionType';
export function FETCH_USER(userName, next) {
   next({     
     type: `${ActionType.FETCH_USER}_REQ`
   });
       console.log('start');
   axios({
     method: 'POST',
     url:"http://xly-wkop.xiaoniangao.cn/getLessonInfo",      
     headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
     data:{          
           mid:'1'    
            }
   }).then(res => {
     console.log(res);
     next({
       type: `${ActionType.FETCH_USER}_SUC`,
       data: res.data
     });
   })
   .catch(err => {
     console.log(err);
     next({
       type: `${ActionType.FETCH_USER}_FAI`
     });
   });
 }



 export function FETCH_MSG(userName, next) {
    next({     
      type: `${ActionType.FETCH_USER}_REQ`
    });
        console.log('start');
    axios({
      method: 'POST',
      url: ` http://xly-wkop.xiaoniangao.cn/getLessonInfo`,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
      data:{          
        mid:'1'    
         }
    }).then(res => {
      console.log(res);
      next({
        type: `${ActionType.FETCH_USER}_SUC`,
        data: res.data
      });
    })
    .catch(err => {
      console.log(err);
      next({
        type: `${ActionType.FETCH_USER}_FAI`
      });
    });
  }
 
 