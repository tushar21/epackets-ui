export function DecodeQuery(q){
    if(q[0]== '?') q= q.replace('?', '');
    return q.split("&").reduce(function(obj, item, i) {
        if(item) {
        item = item.split('=');
        obj[item[0]] = item[1];
        return obj;
        }
    }, {});
}

export function Serialize(obj) {
    let str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
  