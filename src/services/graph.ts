import {request} from './request';

export const graphAPI = {
  getSubjectGraph: (subjectName: string) => {
    return request({
      url: 'http://47.95.145.72:8083/subject/getSubjectGraphByName',
      params: {
        subjectName,
      },
      method: 'GET',
    });
  }
};
