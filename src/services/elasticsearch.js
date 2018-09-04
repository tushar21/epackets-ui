import HTTP from './http';

export default {
    search : search
}

async function search(query = null){
    let response = await HTTP.get('_search?q=${query}');
    return response;
}