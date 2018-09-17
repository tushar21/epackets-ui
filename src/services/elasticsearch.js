import HTTP from './http';

export default {
    search : search
}

async function search(config= {}){
    config.q = config.q.replace('AND', '+');
    config.q = config.q.replace('OR', '|');

    let options = {
        sortBy : config.sortBy || 'date',
        order: config.order || 'desc',
        offset : config.offset || 0,
        limit : config.limit || 10,
        index : config.index || 'cases'
    }

    let payload = {
        "sort": [{ [options.sortBy] : {"order" : options.order}}],
        "from" : options.offset, "size" : options.limit,
        "query": {
          "simple_query_string" : {
              "query": config.q,
              "fields": ["description", "title"]
          }
        }
    }

    let response = await HTTP.post(options.index + '/_search?', payload, true);

    return response;
}