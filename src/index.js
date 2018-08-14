import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store'
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { isTest } from './config';      //测试模式
//测试文件
import Test from './test/test.js'
ReactDOM.render(
    <Provider store={store}>
        {
            isTest ?
            <Test /> :
            <Router routes={routes} history={browserHistory} />
        }
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { createStore, applyMiddleware } from 'redux';
// import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
// import rootReducer from './product/reducer/Reducer';
// import Op from './product/Op';
// import Test from './XYDAproduct/Test';
// import ClassDetal from './CLASSproduct/ClassDetal';
// import Evaluate from './Evaluate/Evaluate';
// import Power from './POWERproduct/Power';
// import { createLogger } from 'redux-logger';
// import serverApi from './product/middleware/serverApi';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
//       const store = createStore(rootReducer,
//       applyMiddleware(serverApi, createLogger())
//   )
// const routes = <Route path="/" component={App}>
//     <IndexRedirect to="/Op" />
//     <Route path="Op" component={Op} />
//     <Route path="ClassDetal" component={ClassDetal}/>
//     <Route path="Test" component={Test}/>
//     <Route path="Evaluate" component={Evaluate}/>
//     <Route path="Power" component={Power}/>
//   </Route>
// ReactDOM.render(
//     <Provider store={store}>
//         <Router routes={routes} history={browserHistory} />
//     </Provider>,
//     document.getElementById('root'));
//     registerServiceWorker();
