const cache = {};

function fetchJSON(url) {
  if(cache[url]) {
    return Promise.resolve(cache[url]);
  }
  
  return fetch(url)
    .then(res => res.json())
    .then(json => {
      cache[url] = json;
      return json;
    });
}
