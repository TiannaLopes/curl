
import axios from 'axios';
const BASE_URL = 'https://curl-booking.ue.r.appspot.com/api/';

export function fetchSomeData() {
  return axios.get(`${BASE_URL}endpoint`);
}