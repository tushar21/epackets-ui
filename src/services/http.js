import CONFIG from './config';
export default {
  get: (url, elastic = false)=>{
    let endpoint = elastic ? CONFIG.ELASTIC_URL : CONFIG.API_URL;
    return fetch(endpoint + url, {
      method: "GET"
    });
  },
  post: (url, elastic= false, payload)=>{
    let endpoint = elastic ? CONFIG.ELASTIC_URL : CONFIG.API_URL;
    return "post data";
      return fetch(endpoint + url, {
        method: "GET",
        body: JSON.stringify(payload)
      });
  }
}