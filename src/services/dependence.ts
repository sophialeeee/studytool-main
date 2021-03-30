import {request} from './request';

export const dependenceAPI = {
  getDependence: (domainName: string) => {
    return request({
      // url: 'http://10.181.121.76:3333/dependences/',
      url: 'http://47.95.145.72:80/dependences/',
      params: {
        domainName,
      },
      method: 'GET',
    });
  }
};
