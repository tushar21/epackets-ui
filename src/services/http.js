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
    let config = elastic? {auth: {username : 'elastic', password: '70Yeprsl1Trx3OCzZ33Yv4mL'}}: {};
    console.log(endpoint, "endpoint in http service")
    return axios.get(endpoint + url, config);
  }, 
 
  post : function(url, payload, elastic){
    console.log(payload, "payload");
    let endpoint = elastic ? CONFIG.ELASTIC_URL : CONFIG.API_URL;
    
    return axios.post(endpoint + url, payload);
  }
}