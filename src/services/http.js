import CONFIG from './config';
import axios from 'axios'
/* export default {
  get: (url, elastic = false)=>{
    let endpoint = elastic ? CONFIG.ELASTIC_URL : CONFIG.API_URL;
    return fetch(endpoint + url, {
      method: "GET"
    });
  },
  post: (url, payload, elastic= false)=>{
    
    let endpoint = elastic ? CONFIG.ELASTIC_URL : CONFIG.API_URL;
      return fetch(endpoint + url, {
        method: "post",
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(payload)
      });
  }
} */

export default {

  get: (url, elastic = false)=>{
    let endpoint = elastic ? CONFIG.ELASTIC_URL : CONFIG.API_URL;
    let config = elastic? {auth: {username : CONFIG.ELASTIC_USERNAME, password: CONFIG.ELASTIC_PASSWORD}}: {};
    return axios.get(endpoint + url, config);
  }, 
 
  post : function(url, payload, elastic = false){
    console.log(payload, "payload");
    let endpoint = elastic ? CONFIG.ELASTIC_URL : CONFIG.API_URL;
    let config = elastic? {auth: {username : CONFIG.ELASTIC_USERNAME, password: CONFIG.ELASTIC_PASSWORD}}: {};
    
    return axios.post(endpoint + url, payload, config);
  }
}