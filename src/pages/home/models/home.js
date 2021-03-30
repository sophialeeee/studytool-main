import { subjectAPI } from '../../../services/subject';
import { subject1API } from '../../../services/subject1';
import { subject2API } from '../../../services/subject2';
import { history } from 'umi';
import {graphAPI} from '../../../services/graph';
export default {
  namespace: 'home',
  state: {
    subjects: [],
    currentSubjectName: '',
    domains: [],
    graph:'',
  },
  effects: {

    // *getSubjects(action, {call, select, put}) {
    //   const authToken = yield select(state => state.userData.authToken);
    //   const userName = yield select(state => state.login.username);
    //   try {
    //     const res = yield call(subjectAPI.getSubjects, authToken);
    //     let SubJect = []
    //     console.log('res in home',res);
    //     console.log('userName',userName);
    //     if(userName === 'chuzhong'){
    //       if(SubJect.length!=0){
    //         SubJect = []
    //       }
    //       SubJect.push(res[9])
    //       yield put({
    //         type: 'updateCurrentSubjectName',
    //       });
    //     }
    //     else if(userName === 'gaozhong'){
    //       if(SubJect.length!=0){
    //         SubJect = []
    //       }
    //       SubJect.push(res[10])
    //     }
    //     else if(userName === 'xiaoxue'){
    //       if(SubJect.length!=0){
    //         SubJect = []
    //       }
    //       SubJect.push(res[11])
    //     }
    //     else if(userName === 'Intelligence'){
    //       if(SubJect.length!=0){
    //         SubJect = []
    //       }
    //       SubJect.push(res[0])
    //     }
    //     else if(userName === 'zhongxiao'){
    //       if(SubJect.length!=0){
    //         SubJect = []
    //       }
    //       SubJect.push(res[9]),
    //       SubJect.push(res[10]),
    //       SubJect.push(res[11])
    //     }
    //     else if(userName === ''){
    //       if(SubJect.length!=0){
    //         SubJect = []
    //       }
    //     }
    //     else{
    //       SubJect = res
    //     }
    //   //  SubJect = res;
    //     console.log('SUBJECT',SubJect);
    //     yield put({
    //       type: 'updateSubjects',
    //       payload: {
    //         subjects: SubJect,
    //       },
    //     });

    //   } catch (e) {
    //     if (e.code === 401) {
    //       history.push('/login');
    //     }
    //     console.log(e);
    //   }
    // },
    // *getSubjects(action, {call, select, put}) {
    // //  const authToken = yield select(state => state.userData.authToken);
    //   try {
    //     const res = yield call(subject1API.getSubjects);
    //     yield put({
    //       type: 'updateSubjects',
    //       payload: {
    //         subjects: res,
    //       },
    //     });
    //   } catch (e) {
    //     if (e.code === 401) {
    //       history.push('/login');
    //     }
    //     console.log(e);
    //   }
    // },
    *getSubjects(action, {call, select, put}) {
      //  const authToken = yield select(state => state.userData.authToken);
      // const userName = yield select(state => state.login.username);
      const userName = 'c';
      console.log('username',userName);
        try {
          const res = yield call(subject2API.getSubjects,userName);
          console.log('res',res);
          // 将res中的subjectList转换为数组
          var res1 = new Array();
          if(res.subjectList){
            res1 = res.subjectList.split(",");
            console.log('res1111111',res1)
          }

          yield put({
            type: 'updateSubjects',
            payload: {
              subjects: res1,
            },
          });
        } catch (e) {
          if (e.code === 401) {
            history.push('/login');
          }
          console.log(e);
        }
      },
      *getDomains({payload: {userName,currentSubjectName}}, {call, put}) {
      try {
        const domains = yield call(subjectAPI.getDomains, userName,currentSubjectName);
        console.log('domainssssss',domains);
        yield put({
          type: 'updateDomains',
          payload: {
            domains,
          }
        })
      } catch (e) {
        
      }
    },
    // *getDomains({payload: {currentSubjectName}}, {call, put}) {
    //   try {
    //     const domains = yield call(subjectAPI.getDomains, currentSubjectName);
    //     yield put({
    //       type: 'updateDomains',
    //       payload: {
    //         domains,
    //       }
    //     })
    //   } catch (e) {

    //   }
    // },
    *getSubjectGraph({payload:{currentSubjectName}},{call,put}){
      console.log("进入了函数内部")
      try{
        // yield call的是一个promise对象，那只有在promise返回的是resolve的情况下，下面跟着的yield put代码才会执行
        const graph = yield call(graphAPI.getSubjectGraph,currentSubjectName);
        yield put({
          type:'updateGraph',
          payload:{
            graph,
          }
        })
      }catch(e){

      }
    }
  },
  reducers: {
    updateSubjects(state, {payload: {subjects}}) {
      return { ...state, subjects};
    },
    updateCurrentSubjectName(state, {payload: {currentSubjectName}}) {
      return { ...state, currentSubjectName };
    },
    updateDomains(state, {payload: {domains}}) {
      return { ...state, domains };
    },
    updateGraph(state,{payload:{graph}}){
      return { ...state, graph };
    },
    updateUserName(state,{payload:{userName}}){
      return { ...state,userName};
    }
  },
  subscriptions: {},
}
