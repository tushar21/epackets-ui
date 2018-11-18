import HTTP from './http';
const indexType = '/_doc/';
export default {
    search : search,
    details : details,
    count : count
}

async function details(id, type){
    let response = await HTTP.get(type + indexType + id, true);
    return response;
}

async function count(config = {}){
    config.q = config.q.replace('AND', '+');
    config.q = config.q.replace('OR', '|');

    let options = {
        sortBy : config.sortBy || 'date',
        order: config.order || 'desc',
        offset : config.offset || 0,
        limit : config.limit || 10,
        index : config.index || config.type || 'cases'        
    }

    let mustQry = [{
        "simple_query_string": {
          "query": config.q,
          "fields":["description", "title"]
        }
      }];

    let filters = ['court', "appelant", "opponent", "lawyer", "judge", "category"];

    filters.forEach((filterVal)=>{
        if(config[filterVal] && config[filterVal] != ''){
            mustQry.push({
                "term": {
                  [filterVal]: config[filterVal].toLowerCase()
                }
            });
        }
    })    

    let payload = {        
        "query": {
            "bool": {
            "must": mustQry
            }
        }
    }

    let response = await HTTP.post(options.index + '/_count?', payload, true);
    return response;
}

async function search(config= {}){
    config.q = config.q.replace('AND', '+');
    config.q = config.q.replace('OR', '|') ;
    config.per_page = config.per_page || 10;
    let options = {
        sortBy : config.sortBy || 'date',
        order  : config.order || 'desc',
        offset : (config.page && config.page > 1) ? (config.per_page * config.page) -1 : 0,
        limit  : config.per_page,
        index  : config.index || config.type || 'cases'        
    }

    let mustQry = [{
        "simple_query_string": {
          "query": config.q,
          "fields":["description", "title"]
        }
    }];

    let filters = ['court', "appelant", "opponent", "lawyer", "judge", "category"];

    filters.forEach((filterVal)=>{
        if(config[filterVal] && config[filterVal] != ''){
            mustQry.push({
                "term": {
                  [filterVal]: config[filterVal].toLowerCase()
                }
            });
        }
    })    

    let payload = {
        "sort": [{ [options.sortBy] : {"order" : options.order}}],
        "from" : options.offset, "size" : options.limit,        
        "query": {
            "bool": {
            "must": mustQry
            }
        }
    }

    let response = await HTTP.post(options.index + '/_search?', payload, true);
    return response;

}