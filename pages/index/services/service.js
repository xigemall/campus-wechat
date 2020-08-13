import {request} from '../../../utils/request';

export async function fetchBanner(){
  return request({
    url:'/api/bankcode'
  });
}