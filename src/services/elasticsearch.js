import HTTP from './http';

export default {
    search : search
}

async function search(query = null){
    query  = query.replace('AND', '+');
    query  = query.replace('OR', '|');
    let payload = {
        "query": {
          "simple_query_string" : {
              "query": query,
              "fields": ["description", "title"]
          }
        }
    }      
    console.log(payload, "payload");
    let response = await HTTP.post('_search?', payload, true);
    return response;
}