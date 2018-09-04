//import CONFIG from '../utils/configs';
export default {
  get: (url)=>{

      /* return fetch(CONFIG.API_URL + url, {
        method: "GET"
      }); */
  },
  post: (url, payload)=>{
    return "post data";
      /* return fetch(url, {
        method: "GET",
        body: JSON.stringify(payload)
      }); */
  }
}