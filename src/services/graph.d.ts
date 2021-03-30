import {AxiosError} from 'axios';
declare interface graphAPI {
  getSubjectGraph: AxiosError | string
}

declare const assembleAPI: graphAPI;
